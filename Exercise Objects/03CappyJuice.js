function createBottles(array) {
    const storage = [];
    const orderedStorage = {};
    for (let i = 0; i < array.length; i++) {
        const currentRow = array[i];
        let items = currentRow.split(' => ');
        let name = items[0];
        let quantity = Number(items[1]);

        const juice = {
            name: name,
            quantity: quantity
        }

        var juiceFromStorage = storage.find(x => x.name == name);
        if (juiceFromStorage === undefined) {
            storage.push(juice);
        } else {
            juiceFromStorage.quantity += juice.quantity;
        }

        let bottles = storage.find(x => x.name == name).quantity;

        if(bottles >= 1000){
            orderedStorage[name] = Math.floor(bottles/1000);
        }
    }

    const result = Object.entries(orderedStorage);

    result.forEach((value)=> console.log(value.join(' => ')));
}

createBottles(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);