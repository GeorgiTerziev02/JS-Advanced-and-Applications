function cook(inputArray) {
    let number = Number(inputArray[0]);

    for (let i = 1; i < inputArray.length; i++) {
        let action = inputArray[i];

        switch (action) {
            case "chop": number /= 2; break;
            case "dice": number = Math.sqrt(number); break;
            case "spice": number += 1; break;
            case "bake": number *= 3; break;
            case "fillet": number = number*4/5; break;
        }

        console.log(number);
    }
}