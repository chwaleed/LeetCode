// 1356. Sort Integers by the numbers of 1 Bits 

function sortByBits(arr: number[]): number[] {
    // arr = arr.sort((a, b) => {
    //     let first = (a.toString(2).match(/1/g) || []).length;
    //     let second = (b.toString(2).match(/1/g) || []).length;

    //     if (first == second) {
    //         return a - b;
    //     }
    //     return first - second

    // })
    // return arr;

    const countBits = (n: number): number => {
        let count = 0;
        while (n) {
            n &= (n - 1);
            count++;
        }
        return count;
    };

    return arr
        .map(num => [num, countBits(num)] as [number, number])
        .sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
        .map(item => item[0]);
};
