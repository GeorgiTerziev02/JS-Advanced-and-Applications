const robot = (function () {
    const storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    return function (command) {
        let commandArgs = command.split(' ').map(x => x.trim());

        if (commandArgs[0] === 'restock') {
            for (const key in storage) {
                if (key === commandArgs[1]) {
                    storage[key] += Number(commandArgs[2]);
                }
            }
            return 'Success';
        }
        else if (commandArgs[0] === 'report') {
            return Object.keys(storage).map(x => `${x}=${storage[x]}`).join(' ');
        }
        else if (commandArgs[0] === 'prepare') {
            let toPrepare = meals[commandArgs[1]];
            let count = Number(commandArgs[2]);

            const neededIngridients = Object.keys(toPrepare).map(x => [x, toPrepare[x] * count]);

            let result = '';
            for (const kvp of neededIngridients) {
                if (storage[kvp[0]] < kvp[1]) {
                    result = `Error: not enough ${kvp[0]} in stock`;
                    break;
                }
            }

            if (result === '') {
                for (const kvp of neededIngridients) {
                    storage[kvp[0]] -= kvp[1];
                }

                result = 'Success';
            }

            return result;
        }
    }
})();

console.log(robot("restock protein 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock carbohydrate 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock fat 10"));
console.log(robot("prepare turkey 1"));
console.log(robot("restock flavour 10"));
console.log(robot("report"));