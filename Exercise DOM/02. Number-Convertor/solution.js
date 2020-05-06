function solve() {

    document.getElementsByTagName('button')[0].addEventListener('click', convert);

    const options = document.getElementById('selectMenuTo');
    let toBinary = document.createElement('option');
    toBinary.value = 'binary';
    toBinary.innerText = 'Binary';
    options.appendChild(toBinary);

    let toHexadecimal = document.createElement('option');
    toHexadecimal.value = 'hexadecimal';
    toHexadecimal.textContent = 'Hexadecimal';
    options.appendChild(toHexadecimal);

    function convert() {
        let number = +document.getElementById('input').value;
        
        let operation = document.getElementById('selectMenuTo').value;
        let result = '';
        if (operation === 'binary') {
            result = number.toString(2);
        }
        else if (operation === 'hexadecimal') {
            result = number.toString(16);
        }

        document.getElementById('result').value = result.toUpperCase();
    }
}