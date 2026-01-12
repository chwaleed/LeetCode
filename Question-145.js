// 145. Binary Tree Postorder Traversal

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

function DFS(node, array = []) {
    if (node == null) return [];
    DFS(node.left, array);
    DFS(node.right, array);
    array.push(node.val)
    return array;
}
function postorderTraversal(root: TreeNode | null): number[] {
    return DFS(root);
};
