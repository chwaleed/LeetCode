// 169. Majority Element

function majorityElement(nums: number[]): number {
    // Optimized
    let count = 0;
    let number = 0;

    for (const num of nums){
        if(count == 0){
            number = num;
            count = 1;
        }else if (number == num){
            count++;
        }else {
            count--;
        }
    }
    return number;

    // Brute Force
    // let hashMap = new Map();
    // if(nums.length == 1) return nums[0];
    // for(const num of nums){
    //     if(hashMap.has(num)){
    //         let current = hashMap.get(num) + 1;
    //         if(current > nums.length/2) return num;
    //         hashMap.set(num, current);
    //     }else{
    //         hashMap.set(num, 1)
    //     }
    // }
    // return 0;
};
