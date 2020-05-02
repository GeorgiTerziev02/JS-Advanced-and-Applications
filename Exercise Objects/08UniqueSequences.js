function unique(data) {
    const arrays = [];
    data.map(x => JSON.parse(x)).forEach(x => arrays.push(x));

    arrays.map(x => x.sort((a, b) => b - a));
    const sortedArrays = arrays.sort((a, b) => a.length - b.length);

    const unique = sortedArrays.reduce((acc, value) => {
        let valueAsString = JSON.stringify(value);

        if(!acc.includes(valueAsString)){
            acc.push(valueAsString);
        }

        return acc;
    }, [])

    unique.map(x=>x.trim()).forEach(x=>console.log(JSON.parse(x)));
}

unique(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
);