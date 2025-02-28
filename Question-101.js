// 101. Symmetric Tree

var isSymmetric = function (root) {
  if (!root) return true;
  const traverse = (t1, t2) => {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;
    return traverse(t1.left, t2.right) && traverse(t1.right, t2.left);
  };
  return traverse(root.left, root.right);
};
