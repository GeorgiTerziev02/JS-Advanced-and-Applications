function solution(...input) {
    const tally = {}
    input.forEach(el => {
        let type = typeof el;
        console.log(`${type}: ${el}`);
        if (tally.hasOwnProperty(type)) {
            tally[type]++;
        }
        else {
            tally[type] = 1;
        }
    });

    for (const key of Object.keys(tally).sort((a, b) => tally[b] - tally[a])) {
        console.log(`${key} = ${tally[key]}`);
    }
}

solution('cat', 42, function () { console.log('Hello world!'); }, function () { console.log('Hello world!'); });