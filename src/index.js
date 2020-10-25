
function findBrackets(char, bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length; i++) {
     //console.log(str.startsWith(bracketsConfig[i][0]));

     if (char === bracketsConfig[i][0] || 
         char === bracketsConfig[i][1]) {

       return bracketsConfig[i];
     }
   } 
}


module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for (i=0; i<str.length;i++) {
    let brackets = findBrackets(str[i], bracketsConfig);

    if (!brackets) {
      return false;
    }
        
    if (str[i] === brackets[1] && stack.length > 0 && 
        stack[stack.length-1] === brackets) {
      stack.pop();
    } else if (str[i] === brackets[0]) {
      stack.push(brackets);
    } else {
      return false;
    }
  }

  return !stack.length;
}
