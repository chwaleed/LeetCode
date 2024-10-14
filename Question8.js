// 27. Remove Element

let nums = [1, 2, 2, 3, 4, 2, 3, 2, 2];
let val = 2;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === val) {
    nums.splice(i, 1);
    i--; // for avoding sking in elements
  }
}
console.log(nums);
