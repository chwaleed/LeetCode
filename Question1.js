let strs = ["flower", "flow", "flight"];

let base = strs[0];
let value = "";

for (let i = 0; i < base.length; i++) {
  for (let j = 1; j < strs.length; j++) {
    if (i == strs[j].length || base[i] != strs[j][i]) {
      console.log(value);
      return;
    }
  }
  value += base[i];
}
