// 14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let base = strs[0];
  let value = "";

  for (let i = 0; i < base.length; i++) {
    for (let word = 1; word < strs.length; word++) {
      if (i === strs[word].length || strs[word][i] !== base[i]) {
        return value;
      }
    }
    value += base[i];
  }

  return value;
};
