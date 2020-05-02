function inventory(array){
    const heroes = [];
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        let elements = currentElement.split(' / ');

        let items = [];
        if (elements.length > 2) {
            items = elements[2].split(', ');
        }

        let hero = {
            name: elements[0],
            level: Number(elements[1]),
            items: items
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

inventory(['Jake / 1000']);