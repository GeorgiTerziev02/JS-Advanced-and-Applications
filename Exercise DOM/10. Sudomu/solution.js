function solve() {
    let buttons = document.querySelectorAll('exercise, button');
    let size = Math.sqrt(Array.from(document.querySelectorAll('tbody input')).length);
    let checkText = document.querySelector('#check > p');

    buttons[0].addEventListener('click', (e) => {
        let cells = Array.from(document.querySelectorAll('tbody input')).map(x => x.value);

        let result = true;
        let parsedCells = [];

        for (let i = 0; i < size; i++) {
            parsedCells.push([...cells.slice(i * size, (i + 1) * size)]);
        }

        for (let i = 0; i < size; i++) {
            let tempResult = (new Set(parsedCells[i])).size === size;
            if (tempResult === false) {
                result = tempResult;
                break;
            }
        }

        for (let i = 0; i < size; i++) {
            let temp = [];
            for (let j = 0; j < size; j++) {
                temp.push(parsedCells[j][i]);
            }

            let tempResult = (new Set(temp)).size === size;
            if (!tempResult) {
                result = tempResult;
                break;
            }
        }

        if(result){
            document.getElementsByTagName('table')[0].style.border = '2px solid green';
            document.getElementById('check').children[0].textContent =
              'You solve it! Congratulations!';
        }
        else{
            document.getElementsByTagName('table')[0].style.border = '2px solid red';
            document.getElementById('check').children[0].textContent =
              'NOP! You are not done yet...';
        }
    });

    buttons[1].addEventListener('click', () => {
        Array.from(document.querySelectorAll('tbody input')).forEach(x => x.value = '');
        checkText.textContent = '';

        document.getElementsByTagName('table')[0].style.border = '';
        document.getElementById('check').children[0].textContent = '';
    });

}