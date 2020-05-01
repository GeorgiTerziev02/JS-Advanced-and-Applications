function extract(arr){
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        
        if (element >= biggest) {
            console.log(element);
            biggest = element;
        }
    }
}

extract([1,2,3,4]
    );