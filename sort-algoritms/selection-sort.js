const arr = [44,36,7,4,22,9,43,6,8,17,84,44,27,66,54,37,89,65];

function selectionSort(array){
    for(let i = 0; i < array.length; i++) {
        let indexMin =i;
        for(let j =i+1; j<array.length; j++){
            if(array[j]<array[indexMin]){
                indexMin = j;
            }
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp
    }
    return array;
}



console.log(selectionSort(arr));