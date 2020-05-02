function orderUsernames(data){
    const sortedData = data.sort((a,b)=>{
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })

    sortedData.filter((element, index, array)=> array.indexOf(element, index + 1) === -1).forEach(x=>console.log(x));
}

orderUsernames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
);