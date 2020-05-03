const add = (function sum() {
    let sum = 0
    function add(addend) {
        sum += addend;

        return add;
    };

    add.toString = function () {
        return sum;
    }

    return add;
})();

console.log(add(1)(2).toString());