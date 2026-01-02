// 961. N-Repeated Elements in Size 2N Array

function repeatedNTimes(nums: number[]): number {
    // Optimized Solution
     const seen = new Set();

     for (const num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }


    // First BruteForce Solution

    // let hashMap = new Map();
    // let n = nums.length/2;

    // for(let i = 0; i < nums.length ; i++){
        
    //     if(hashMap.get(nums[i])){
    //         let previousCount = hashMap.get(nums[i])
    //         hashMap.set(nums[i], previousCount + 1)
    //     }else{
    //         hashMap.set(nums[i], 1)
    //     }
    // }

    // for (const [key, value ] of hashMap){
    //     if(value == n){
    //         return key;
    //     }
    // }
};
