// 1404. Number of Steps to Reduce a Number in Binary Represenation to One

function numSteps(s: string): number {
    let num = BigInt('0b' + s);
    let count = 0;

    while(num > 1){
        if(num % 2n == 0n){
            num = num/2n
        }else{
            num = num + 1n;
        }
        count++;
    }
    return count;
};
