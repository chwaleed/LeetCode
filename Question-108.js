// 108. Convert Sorted Array to Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  return constructBinnaryTree(nums, 0, nums.length - 1);

  function constructBinnaryTree(nums, left, right) {
    if (left > right) return null;

    let mid = Math.round(left + (right - left) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = constructBinnaryTree(nums, left, mid - 1);
    node.right = constructBinnaryTree(nums, mid + 1, right);

    return node;
  }
};
