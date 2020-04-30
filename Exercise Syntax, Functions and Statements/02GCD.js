function gcd(firstNum, secondNum){
    if (firstNum > secondNum) {
        let x = secondNum;
        secondNum = firstNum;
        firstNum = x;
    }

    while (secondNum != 0) {
        let y = firstNum;
        firstNum = secondNum;
        secondNum = y % secondNum;
    }

    console.log(firstNum);
}