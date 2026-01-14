// 226. Invert Binary Tree

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

function invertTree(root: TreeNode | null): TreeNode | null {
    function invert(node){
        if(!node) return;
        invert(node.left);
        invert(node.right);

        if(node?.left && node?.right){
            let left = node.left;
            node.left = node.right;
            node.right = left;
        }else if(node?.left && node.right == null){
            node.right = node.left;
            node.left = null;
        } else if(node?.right && node.left == null){
            node.left = node.right;
            node.right = null;
        }else {
            return;
        }
    }
    invert(root);
    return root;
};
