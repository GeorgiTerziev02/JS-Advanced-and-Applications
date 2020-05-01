function sort(arr){

    function comporator(a,b){
        if (a.length === b.length) {
            if (a === b) {
                return 0;
            }
            else if(a >= b){
                return 1;
            }
            else{
                return -1;
            }
        }
        else{
            return a.length - b.length;
        }
    }

    arr.sort(comporator);
    console.log(arr.join('\n'));
}

sort(['test', 
'Deny', 
'omen', 
'Default']
);