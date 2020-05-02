function store(array){
    let parsedData = array.reduce((acc, line)=>{
        let [name , price] = line.split(':').map(t=>t.trim());
        let parsedLine = `${name}: ${price}`;
        if(acc[name[0]]){
            acc[name[0]].push(parsedLine);
        }else{
            acc[name[0]] = [parsedLine];
        }

        return acc;
    }, {});

    Object.keys(parsedData).sort().map(x=>{
        console.log(x);
        parsedData[x].sort().map(product => console.log(' ' + product));
    });
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);