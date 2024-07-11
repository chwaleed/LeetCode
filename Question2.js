// Two Sum

function twoSum() {
  let nums = [2, 7, 11, 15];
  let target = 17;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
}
twoSum();
