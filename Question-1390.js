// 1390. Four Divisors

function sumFourDivisors(nums: number[]): number {
    let hashMap = new Map();
    let totalSum = 0;

    for(const num of nums){
        if(hashMap.has(num)){
            totalSum += hashMap.get(num);
        }else{
            let root = Math.floor(Math.sqrt(num));
            let count = 0;
            let sum = 0;
            for(let i = 1; i <= root ; i++){
                if(num % i == 0){
                    if(num/i != i){
                        sum = sum + i + num/i;
                        count = count + 2;
                    }else{
                        sum = sum + i;
                        count = count + 1;
                    }

                    if(count > 4){
                        break;
                    }
                }
            }
            if(count == 4){
                hashMap.set(num,sum);
                totalSum += sum;
            }else{
                hashMap.set(num, 0);
            }
        }
    }
    return totalSum;
};
