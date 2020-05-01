function rotate(arr){
    let rotationsCount = parseInt(arr.pop()) % arr.length;

        for (let i = 0; i < rotationsCount; i++) {
            let toMove = arr.pop();
            arr.unshift(toMove);
        }
    

    console.log(arr.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']);