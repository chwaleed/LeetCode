let s = "IV";

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let result = 0;
for (let i = 0; i < s.length; i++) {
  if (romanMap[s[i]] >= romanMap[s[i + 1]]) {
    result = result + romanMap[s[i]];
    console.log(result);
  } else if (romanMap[s[i]] < romanMap[s[i + 1]]) {
    result = result - romanMap[s[i]];
  } else {
    result = result + romanMap[s[i]];
  }
}

console.log(result);
