// 58. Length of Last Word

var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  const wordlength = words.length;

  return words[wordlength - 1].length;
};
