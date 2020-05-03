function solution(defaultValue) {
    let sum = defaultValue;

    return (num) => {
        return sum + num;
    }
}

let def = solution(5);
console.log(def(2));
console.log(def(3));

let def2 = solution(9);
console.log(def2(3));