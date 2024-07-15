let arrray = [1,2,3,4,5,6,7,8,9,10];
let result = [];
let i = 0;

function oddNums(array){
    if(i >= array.length){
        return result;
    }
    if(array[i]%2 != 0){
        result.push(array[i])
    }
    i++
    oddNums(array)
}
oddNums(arrray);
console.log(result);


