class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(array) {
        let result = '';
        for (let i = 0; i < array.length; i++) {
            const args = array[i].split(' ').map(x => x.trim());
            let name = args[0];
            let quantity = Number(args[1]);
            let price = args[2];

            if (price > this.budget) {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            } else {
                this.budget -= price;
                if (!this.productsInStock[name]) {
                    this.productsInStock[name] = 0;
                }
                this.productsInStock[name] += quantity;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join('\n') + '\n';
    }

    addToMenu(meal, neededProducts, price) {
        let result = '';
        if (this.menu[meal]) {
            result += `The ${meal} is already in our menu, try something different.`;
        } else {
            this.menu[meal] = [];
            this.menu[meal].push(price);
            this.menu[meal].push(neededProducts);
            let count = Object.keys(this.menu).length;
            result += `"Great idea! Now with the ${meal} we have ${count} meals in the menu, other ideas?`;
        }

        return result;
    }

    showTheMenu() {
        let result = '';
        if (Object.keys(this.menu).length === 0) {
            result += 'Our menu is not ready yet, please come later...';
        } else {
            Object.entries(this.menu)
                .forEach(menuItem => result += `${menuItem[0]} - $ ${menuItem[1][0]}\n`);
        }
        result = result.trim();
        return result;
    }

    makeTheOrder(meal) {
        const meals = Object.keys(this.menu);
        let result = '';
        if (!meals.includes(meal)) {
            result += `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const mealInfo = this.menu[meal];
            let price = mealInfo[0];
            let products = mealInfo[1];
            console.log(this.productsInStock);
            let haveEverything = true;
            for (let i = 0; i < products.length; i++) {
                const prdArgs = products[i].split(' ').map(x => x.trim());
                let name = prdArgs[0];
                let quantity = Number(prdArgs[1]);

                if (!this.productsInStock[name]) {
                    haveEverything = false;
                    break;
                } else {
                    if (this.productsInStock[name] < quantity) {
                        haveEverything = false;
                        break;
                    }
                }
            }

            if (!haveEverything) {
                result += `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                for (let i = 0; i < products.length; i++) {
                    const prdArgs = products[i].split(' ').map(x => x.trim());
                    let name = prdArgs[0];
                    let quantity = Number(prdArgs[1]);

                    this.productsInStock[name] -= quantity;
                }

                this.budget += price;

                result += `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`;
            }
        }

        return result;
    }
}

// fix tests

let kitchen = new Kitchen(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Pizza'));