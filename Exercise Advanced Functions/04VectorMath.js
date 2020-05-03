const solution = (function () {
    function add(vec1, vec2) {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
    }

    function multiply(vec1, multiplier) {
        return [vec1[0] * multiplier, vec1[1] * multiplier];
    }

    function length(vec) {
        return Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
    }

    function dot(vec1, vec2) {
        return vec1[0] * vec2[0] + vec2[1] * vec1[1];
    }

    function cross(vec1, vec2) {
        return vec1[0] * vec2[1] - vec1[1] * vec2[0];
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([1, 1], 2));
console.log(solution.length([1, 1]));
console.log(solution.dot([2, 3], [2, -1]));


