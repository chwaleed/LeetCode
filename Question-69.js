// 69. Sqrt(x)

var mySqrt = function (x) {
  let left = 0;
  let right = x;

  let ans = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = mid * mid;

    if (sqr === x) return mid;

    if (sqr < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
