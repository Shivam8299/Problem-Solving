function rangeArr(start, end){
    if(end<start){
        return []
    }
    else {
        const number = rangeArr(start, end-1)
        number.push(end)
        return number
    }
}
console.log(rangeArr(1, 50))