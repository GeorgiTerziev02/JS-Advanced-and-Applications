function solve() {
    const clearButton = document.getElementsByClassName('clear')[0];
    const expression = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');

    const operators = ['+', '-', '/', '*']

    clearButton.addEventListener('click', () => {
        expression.innerHTML = '';
        result.innerHTML = '';
    });

    const pad = document.getElementsByClassName('keys')[0];

    const operations = {
        '+': (num1, num2) => Number(num1) + Number(num2),
        '-': (num1, num2) => Number(num1) - Number(num2),
        '*': (num1, num2) => Number(num1) * Number(num2),
        '/': (num1, num2) => Number(num1) / Number(num2)
    };

    pad.addEventListener('click', (e) => {
        let value = e.target.value;

        if (value === '=') {
            const params = expression.innerHTML.split(' ').filter(x => x !== '');

            result.innerHTML = operations[params[1]](params[0], params[2]);

            return;
        }

        if (operators.includes(value)) {
            expression.innerHTML += ` ${value} `;
            return;
        }

        expression.innerHTML += value;
    })
}