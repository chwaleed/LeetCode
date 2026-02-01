// 3010. Divide an Array Into Subarrays With Minimum Cost I

function minimumCost(nums: number[]): number {
    let first = nums[0];
    let sortedArray = nums.sort((a,b)=> a - b);
    let slicedArray = sortedArray.slice(0, 3);

    if(slicedArray.includes(first)){
        return slicedArray[0] + slicedArray[1] + slicedArray[2]
    }else{
        return first + slicedArray[0] + slicedArray[1]
    }
};
