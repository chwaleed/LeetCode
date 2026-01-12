// 144. Binary Tree Preorder Traversal 

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

 function DFS(node, array = []){
    if(node == null) return [];
    array.push(node.val)
    DFS(node.left, array);
    DFS(node.right, array);
    return array;
 }

function preorderTraversal(root: TreeNode | null): number[] {
    return DFS(root);
};
