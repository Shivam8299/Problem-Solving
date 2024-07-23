
// let str = 'hello';
// let newStr = str.split('')
// console.log(newStr.reverse().join(''))


// by recursion

function reverseStr (str) {
    if(str===''){
        return ''
    }
    else{
        return  reverseStr(str.substr(1))+str.charAt(0)
    }
}
console.log(reverseStr("hello"))