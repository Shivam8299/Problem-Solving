const input = require('readline-sync')
const str = input.question("Enter the string :");
let newArr = str.split('');
let hashMap = {};
for(let i=0; i<newArr.length; i++){
    if(!hashMap[newArr[i]]){
        hashMap[newArr[i]]=1;
    }
    else {
        hashMap[newArr[i]]+=1;
    }
}
console.log(hashMap)