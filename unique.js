let arr = [1,2,2,1,5,6,6];
let result = 0;
arr.forEach((val)=>{
    result = result^val
})
console.log(result);