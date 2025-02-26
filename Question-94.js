// 94. Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  let res = [];

  function solution(root) {
    if (!root) return;
    solution(root.left);
    res.push(root.val);
    solution(root.right);
  }
  solution(root);
  return res;
};
