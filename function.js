// recursion : a function call itself
// it will get call infinite time 
// if a function call itself then there must be an end point
let count = 1;
function demo (num){
  if(count > num ){
    return;
  } 
  console.log(`hey i am shivam ${count}`)
  count++;
  demo(num)
}
demo(13);