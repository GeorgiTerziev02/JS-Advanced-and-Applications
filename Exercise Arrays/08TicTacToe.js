'use strict';
function ticTacToe(arr) {
    const dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    function printDashboard(arr) {
        arr.forEach(value => console.log(value.join('\t')));
    }

    function checkForWinner(arr, playerMark, x, y) {
        let col = 0;
        let row = 0;
        let diagonal = 0;
        let reverseDiagonal = 0;
        let arrLength = arr.length;

        for (let i = 0; i < arrLength; i++) {
            if (arr[x][i] === playerMark) {
                row++;
            }
            if (arr[i][y] === playerMark) {
                col++;
            }
            if (arr[i][i] === playerMark) {
                diagonal++;
            }
            if (arr[i][arrLength - 1 - i] === playerMark) {
                reverseDiagonal++;
            }
        }

        if (row === arrLength || col === arrLength || diagonal === arrLength || reverseDiagonal === arrLength) {
            return playerMark;
        }
        return false;
    }

    function checkDraw(arr) {
        let result = arr.some(value => value.includes(false))

        return !result;
    }

    let isFirstPlayerTurn = true;
    let mark = 'X';
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        let xCoordinate = parseInt(element[0]);
        let yCoordinate = parseInt(element[2]);

        if (dashboard[xCoordinate][yCoordinate] === false) {
            dashboard[xCoordinate][yCoordinate] = mark;

            let winner = checkForWinner(dashboard, mark, xCoordinate, yCoordinate);
            if (winner !== false) {
                console.log(`Player ${winner} wins!`);
                printDashboard(dashboard);
                return;
            }
            if (checkDraw(dashboard)) {
                console.log(`The game ended! Nobody wins :(`);
                printDashboard(dashboard);
                return;
            }

            if (isFirstPlayerTurn) {
                isFirstPlayerTurn = false;
                mark = 'O';
            }
            else {
                isFirstPlayerTurn = true;
                mark = 'X';
            }
        }
        else {
            console.log('This place is already taken. Please choose another!');
        }
    }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);