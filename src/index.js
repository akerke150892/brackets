module.exports = function check(str, bracketsConfig) {
  let newArr = [];
  for (let elem of bracketsConfig) {
    newArr.push(elem.join(""));
  }
  
  let stack = "";
  for (const char of str) {
    const lastCharInStack = stack[stack.length-1];
    const twoChars = lastCharInStack + char;
    if (newArr.includes(twoChars))
      stack = stack.slice(0, -1);
    else
      stack = stack + char;
  }
  return !stack;
}
