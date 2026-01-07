// 222. Count Complete Tree Nodes

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

function countNodes(root: TreeNode | null): number {
    if(root == null) return 0;

    let leftCount = countNodes(root.left);
    let rightCount = countNodes(root.right);

    return leftCount + rightCount + 1;

    // BFS
    // let count = 0;
    // let queue = [root];
    // if(!root) return 0;

    // while(queue.length > 0){
    //     let currentLevel = queue.length;
    //     count += currentLevel;
    //     for(let i = 0; i < currentLevel; i++ ){
    //         let currentNode = queue.shift();

    //         if(currentNode?.left) queue.push(currentNode.left);
    //         if(currentNode?.right) queue.push(currentNode.right);
    //     }
    // }
    // return count;

};
