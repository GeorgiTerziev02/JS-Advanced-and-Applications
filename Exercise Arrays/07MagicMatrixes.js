function checkMagic(arr) {
    let length = arr.length;
    let result = true;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let innerSum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            innerSum += arr[i][j];
        }
        if (i === 0) {
            sum = innerSum;
        }
        else if (innerSum !== sum) {
            result = false;
        }

        if (result === false) {
            break;
        }
    }

    if (result !== false) {
        for (let j = 0; j < arr[0].length; j++) {
            let innerSum = 0;
            for (let i = 0; i < length; i++) {
                innerSum += arr[i][j];
            }

            if (innerSum !== sum) {
                result = false;
            }
            if (result === false) {
                break;
            }
        }
    }

    console.log(result);
}

checkMagic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
);

