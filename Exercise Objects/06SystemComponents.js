function solution(data) {
    const parsedData = data.reduce((acc, line) => {
        let [system, comp, subComp] = line.split('|').map(x => x.trim());

        if (acc[system]) {
            if (acc[system][comp]) {
                acc[system][comp].push(subComp);
            } else {
                acc[system][comp] = [subComp];
            }
        } else {
            acc[system] = {};
            acc[system][comp] = [subComp];
        }

        return acc;
    }, {});

    Object.keys(parsedData).sort((a, b) => {
        let aKeys = Object.keys(parsedData[a]);
        let bKeys = Object.keys(parsedData[b]);

        if (bKeys.length - aKeys.length > 0) {
            return 1;
        }
        else if (bKeys.length - aKeys.length < 0) {
            return -1;
        }
        else {
            return a.localeCompare(b);
        }
    }).map(x => {
        console.log(x);
        Object.keys(parsedData[x]).sort((a, b) => {
            let aLength = parsedData[x][a].length;
            let bLength = parsedData[x][b].length;

            return bLength - aLength;
        }).map(y => { 
            console.log(`|||${y}`);
            parsedData[x][y].forEach(element => {
                console.log(`||||||${element}`);
            });
        });
    });

}

solution(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);