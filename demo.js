function StringReduction(str) {
    function reduceOnce(s) {
      let newStr = '';
      let i = 0;
  
      while (i < s.length) {
        if (i + 1 < s.length && s[i] !== s[i + 1]) {
          if ((s[i] === 'a' && s[i + 1] === 'b') || (s[i] === 'b' && s[i + 1] === 'a')) {
            newStr += 'c';
          } else if ((s[i] === 'a' && s[i + 1] === 'c') || (s[i] === 'c' && s[i + 1] === 'a')) {
            newStr += 'b';
          } else if ((s[i] === 'b' && s[i + 1] === 'c') || (s[i] === 'c' && s[i + 1] === 'b')) {
            newStr += 'a';
          }
          i += 2; // Skip the next character as it has been merged
        } else {
          newStr += s[i];
          i++;
        }
      }
  
      return newStr;
    }
  
    let reducedStr = str;
    while (true) {
      let newStr = reduceOnce(reducedStr);
      if (newStr === reducedStr) {
        break;
      }
      reducedStr = newStr;
    }
  
    return reducedStr.length;
  }
  
  // keep this function call here 
  console.log(StringReduction("abcabc"));
  