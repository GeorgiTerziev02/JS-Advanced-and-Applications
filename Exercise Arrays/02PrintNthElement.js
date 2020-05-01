function print(arr) {
    let element = parseInt(arr.pop());

    for (let i = 0; i < arr.length; i+=element) {
            console.log(arr[i]);
    }
}

print(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);