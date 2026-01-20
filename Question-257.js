// 257. Binary Tree Paths

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

 function DFS(node, string, array){
    if(!node) return;

    if(string != ''){
        string += '->' + node.val;
    }else{
        string += node.val;
    }
    if(!node?.left && !node.right){
       array.push(string);
    }

    const leftSide = DFS(node?.left, string, array);
    const rightSide = DFS(node?.right, string, array);

    return  array;
 }

function binaryTreePaths(root: TreeNode | null): string[] {

    return DFS(root,'', []);
};
