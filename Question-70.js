// 70. Climbing Stairs

var climbStairs = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 1;

  let arr = Array(n + 1).fill(0);

  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
