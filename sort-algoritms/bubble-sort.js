const arr = [44,36,7,4,22,9,43,6,8,17,84,44,27,66,54,37,89,65];

function bubbleSort(array){
    for(let i =0; i<array.length; i++){
        for(let j = 0; j<array.length; j++){
            if(array[j+1]<array[j]){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] =tmp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(arr));