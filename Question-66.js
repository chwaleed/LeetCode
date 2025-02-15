// 66. Plus One

var plusOne = function (digits) {
  const sum = digits.reduce((acc, num) => (acc + BigInt(num)) * 10n, 0n);
  const finalNum = sum / 10n;
  let total = finalNum + 1n;
  let arr = [];

  while (total > 0n) {
    let num = total % 10n;
    arr.unshift(Number(num));
    total = total / 10n;
  }

  return arr;
};
