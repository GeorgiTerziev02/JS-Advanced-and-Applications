function sort(array, format) {
    let sortedArray;
    if (format === 'asc') {
        sortedArray = array.sort((a, b) => a - b);
    }
    else if (format === 'desc') {
        sortedArray = array.sort((a, b) => b - a);
    }

    return sortedArray;
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));