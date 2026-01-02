// 12. Integer to Roman

function intToRoman(num: number): string {
    let number = num;

  let roman = "";
  const array = [1000, 900, 500, 400, 100, 90,  50, 40, 10, 9, 5, 4, 1];

  const romanMap = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, 'XL'],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ]);

  for(let i = 0; i < array.length; i ++){
    if(Math.floor(number/array[i]) > 0){
        let count = Math.floor(number/array[i]);
        roman += romanMap.get(array[i]).repeat(count);
        number = number % array[i]
    }
  }
  return roman;
};
