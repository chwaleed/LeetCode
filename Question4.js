const arr = [1, 1, 2, 2, 2, 3, 3, 4];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1] && i < arr.length - 1) {
    continue;
  } else {
    arr[count] = arr[i];
    count++;
  }
}
arr.length = count;
console.log(arr);
console.log(arr.length);
