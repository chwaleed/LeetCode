const bracket = "([])";

const openBracket = "({[";
const closeBracket = ")}]";
let stack = [];

for (let i = 0; i < bracket.length; i++) {
  if (openBracket.includes(bracket[i])) {
    stack.push(bracket[i]);
    console.log(stack);
  } else if (closeBracket.includes(bracket[i])) {
    stack.pop();
  } else {
    return false;
  }
}
console.log(stack.length);
