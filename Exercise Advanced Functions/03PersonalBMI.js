function checkBMI(name, age, weight, height) {
    let bmi = Math.round(weight / (Math.pow((height / 100), 2)));

    const person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: bmi,
        status: ''
    }

    if (bmi < 18.5) {
        person.status = 'underweight';
    }
    else if (bmi < 25) {
        person.status = 'normal';
    }
    else if (bmi < 30) {
        person.status = 'overweight';
    }
    else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }

    return person;
}

checkBMI('Honey Boo Boo', 9, 57, 137);