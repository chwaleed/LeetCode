// 1339. Maximum Product of Splitted Binary Tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxProduct(root: TreeNode | null): number {
    // Marked For Revision
    let max = 0;
    let treeSum = 0;

    function getSum(node) {
        if (!node) return 0;
        return node.val + getSum(node.left) + getSum(node.right);
    }
    treeSum = getSum(root);

    function findMax(node) {
        if (!node) return 0;

        let left = findMax(node.left);
        let right = findMax(node.right);

        let currentSum = node.val + left + right;

        max = Math.max(
            max,
            currentSum * (treeSum - currentSum)
        );

        return currentSum;
    }

    findMax(root);

    return max % (1e9 + 7);

};
