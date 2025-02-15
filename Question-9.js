// 9. Plaindrome Number

const isPlaindrome = (x) => {
  let copy = x;
  let reverse = 0;
  if (x < 0) {
    return false;
  }

  while (x != 0) {
    reverse = reverse * 10;
    reverse = reverse + (x % 10);
    x = Math.floor(x / 10);
  }

  if (reverse == copy) {
    return true;
  } else {
    return false;
  }
};
isPlaindrome();
