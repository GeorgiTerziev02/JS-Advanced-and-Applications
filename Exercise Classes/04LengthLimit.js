class Stringer {
    constructor(stringValue, length) {
        this.innerString = stringValue;
        this.innerLength = length;
    }

    increase(num){
        this.innerLength += num;
    }

    decrease(num){
        if(this.innerLength - num <= 0){
            this.innerLength = 0;
        }else{
            this.innerLength -= num;
        }
    }

    toString(){
        let result = '';
        if(this.innerLength < this.innerString.length){
            result = this.innerString.slice(0, this.innerLength) + '...';
        }else{
            result = this.innerString;
        }
        
        return result; 
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
