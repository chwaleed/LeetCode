// 104. Maximum Depth of Binary Tree
var maxDepth = function (root) {
  const findDepth = (root) => {
    if (!root) return 0;
    return 1 + Math.max(findDepth(root.left), findDepth(root.right));
  };
  return findDepth(root);
};
