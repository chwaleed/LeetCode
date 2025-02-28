// 100. Same Tree

// My Approach
var isSameTree = function (p, q) {
  let isSame = true;

  const traverse = (p, q) => {
    if (p && q?.val == null) {
      isSame = false;
      return;
    }
    if (q && p?.val == null) {
      isSame = false;
      return;
    }
    if (!p || !q) return;
    if (p.val !== q.val) {
      isSame = false;
      return;
    }
    traverse(p.left, q.left);
    traverse(p.right, q.right);
  };
  traverse(p, q);
  return isSame;
};

// Best Approach
var isSame = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSame(p.left, q.left) && (p.right, q.right);
};
