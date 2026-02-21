// 762. Prime Number of Set Bits in Binary Representation


function countPrimeSetBits(left: number, right: number): number {
    const primeSet = new Set([2,3,5,7,11,13,17,19,23,29,31]);
    let count = 0;
    for(let i = left; i <= right; i++){
        let binnary = i.toString(2);
        let onesCount = binnary.split('1').length - 1;
        if(primeSet.has(onesCount)){
            count++;
        }
    }
    return count;
};
