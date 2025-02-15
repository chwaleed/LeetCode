// 35. Search Insert Position

var searchInsert = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.includes(target)) {
      return nums.indexOf(target);
    } else {
      if (nums[i] > target) {
        return i;
      } else if (nums[i] === undefined) {
        return i;
      }
    }
  }
};
