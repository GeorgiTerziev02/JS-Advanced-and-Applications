function addRemove(arr){
    let num = 1;
    let newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element === 'add'){
            newArray.push(num);
        }
        else if(element === 'remove'){
            newArray.pop();
        }

        num++;
    }

    if(newArray.length === 0){
        console.log('Empty');
    }
    else{
        newArray.forEach(el => {
            console.log(el);
        });
    }
}

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);