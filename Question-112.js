// 112. Path Sum

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    function findSumByDFS(node, sum = 0) {
        if(node == null) return false;
        sum += node.val;
        if(sum == targetSum && !node.left && !node.right) return true;
        if(node.left && findSumByDFS(node.left, sum)) return true;
        if(node.right && findSumByDFS(node.right, sum)) return true;
        return false;
    }
    return findSumByDFS(root);
};
