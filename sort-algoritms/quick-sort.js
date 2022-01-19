const arr = [44,-23,36,7,4,22,9,43,6,8,17,-43,-7,-3,1,84,44,27,66,54,37,89,65];

function quickSort(array){
    if(array.length <=1){
        return array;
    }
    let pivctIndex = Math.floor(array.length/2);
    let pivet = array[pivctIndex];
    let less = [];
    let greater = [];
    for(let i=0; i<array.length; i++){
        if(i===pivctIndex){
            continue
        }
        if(array[i]<pivet){
            less.push(array[i]);
        }else{
            greater.push(array[i])
        }
    }
    return [...quickSort(less),pivet,...quickSort(greater)]
}

console.log(quickSort(arr));