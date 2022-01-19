const array = [2,6,4,1,8,9,55,3,54,18,99,12];

function linearSearch(array, item){
    for(let i =0; i<array.length; i++){
        if(array[i]===item)
            return i;
    }
    return null
}

console.log(linearSearch(array,54))