function sameNumbers(number) {
    let sum = 0;
    let lastNum;
    let areSame = true;

    while (number != 0) {
        lastNum = number % 10;
        sum = sum + lastNum;

        number = parseInt(number / 10);

        if (number != 0) 
        {
            if (number % 10 != lastNum) {
                areSame = false;
            }
        }
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2232);