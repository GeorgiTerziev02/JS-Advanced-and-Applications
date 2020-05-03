function solution() {
    let str = '';

    function append(newStr) {
        str += newStr;
    }

    function print(){
        console.log(str);
    }

    function removeStart(n){
        str = str.substring(n)
    }

    function removeEnd(n){
        str = str.substring(0, str.length - n);
    }
    
    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);

firstZeroTest.print();
