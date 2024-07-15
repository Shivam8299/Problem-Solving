let arr = [6,5,4,3,2,1];
let i = 0;
let j= 1;
let result = [];

function sortedArr(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

function sortCheck (arr){
    if(sortedArr(arr)){
        result = arr;
        return true;
    }
    else if(arr[i]<arr[j]){
        i++;
        j++
        sortCheck(arr)
    }
    else {
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i=0;
        j=1;
        sortCheck(arr)
    }
}
sortCheck(arr)
console.log(result)