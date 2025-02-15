// 20. Valid Parentheses
const s = "()";

const openBracket = "({[";
const closeBracket = ")}]";
let stack = ["9", "10"];

for (let i = 0; i < s.length; i++) {
  if (openBracket.includes(s[i])) {
    stack.push(s[i]);
    console.log(stack);
  } else if (closeBracket.includes(s[i])) {
    const lastOpen = stack.pop(); // Get the last open bracket
    if (
      (s[i] === ")" && lastOpen === "(") ||
      (s[i] === "}" && lastOpen === "{") ||
      (s[i] === "]" && lastOpen === "[")
    ) {
    } else {
      return false; // Mismatched brackets
    }
  } else {
    return false;
  }
}
console.log(stack.length);
