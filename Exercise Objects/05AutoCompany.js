function createRegister(data) {
    const parsedData = data.reduce((acc, line) => {
        let [producer, model, quantity] = line.split('|').map(x => x.trim());

        if (acc[producer]) {
            if (acc[producer][model]) {
                acc[producer][model] += Number(quantity);
            } else {
                acc[producer][model] = Number(quantity);
            }
        }
        else {
            acc[producer] = {};
            acc[producer][model] = Number(quantity);
        }

        return acc;
    }, {});

    Object.keys(parsedData).map(producer=>{
        console.log(producer);
        Object.keys(parsedData[producer]).map(model=>{
            console.log(`###${model} -> ${parsedData[producer][model]}`);
        });
    });
}

createRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);