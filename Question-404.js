// 404. Sum of Left Leaves

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

function DFS(node, isLeft){
    if (!node) return 0;

    if (!node.left && !node.right && isLeft) {
        return node.val;
    }

    return DFS(node?.left, true) + DFS(node?.right, false);
}

function sumOfLeftLeaves(root: TreeNode | null): number {
    return  DFS(root,  false);
};
