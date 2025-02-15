// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let data = new Set();
  let currentLongest = 1;
  if (s === "") return 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    while (data.has(s[i])) {
      data.delete(s[left]);
      left++;
    }
    data.add(s[i]);
    currentLongest = Math.max(currentLongest, i - left + 1);
  }
  return currentLongest;
};
