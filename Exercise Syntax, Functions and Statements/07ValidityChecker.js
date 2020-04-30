function checkValidation(inputArray)
{
    let x1 = inputArray[0];
    let y1 = inputArray[1];
    let x2 = inputArray[2];
    let y2 = inputArray[3];

    let xDistance = Math.abs(x1-x2);
    let yDistance = Math.abs(y1-y2);

    var distanceFirstPointToZeroPoint =Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2)); 
    var distanceSecondPointToZeroPoint =Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2)); 

    var distanceBetweenTheTwoPoints = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

    if(Number.isInteger(distanceFirstPointToZeroPoint))
    {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if(Number.isInteger(distanceSecondPointToZeroPoint))
    {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    }
    else
    {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if(Number.isInteger(distanceBetweenTheTwoPoints))
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
