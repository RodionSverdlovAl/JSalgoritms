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

console.log(binarySearch(array, 15));