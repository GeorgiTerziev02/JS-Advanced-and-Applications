function calories(inputArray) {
    let output = "{ ";
    for (let i = 0; i < inputArray.length; i += 2) {
        let productName = inputArray[i];
        let caloriesNumber = inputArray[i + 1];

        output += `${productName}: ${caloriesNumber}`;

        if (i + 1 != inputArray.length - 1) {
            output+=", ";
        }
    }

    output += " }";

    console.log(output);
}