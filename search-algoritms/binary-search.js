const array = [1,2,5,7,9,12,15,24,54,77,79,90,94,99];


function binarySearch(array, item){
    let start =0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1
    while(found ===false && start <=end){
        middle=Math.floor((start+end)/2);
        if(array[middle]===item){
            found = true;
            position = middle;
            return position;
        }
        if(item< array[middle]){
            end = middle-1;
        }else{
            start =middle+1;
        }
    }
    return position
}

function recursiveBinarySearch(array, item, start, end){
    let middle = Math.floor((start+end)/2);
    if(item === array[middle]){
        return middle;
    }
    if(item <array[middle]){
        return recursiveBinarySearch(array,item,0,middle-1)
    }else{
        return recursiveBinarySearch(array,item,middle+1,end)
    }

}

console.log(recursiveBinarySearch(array, 15,0,array.length));