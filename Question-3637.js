// 3637. Trionic Array I

function isTrionic(nums: number[]): boolean {
    if(nums.length < 4) return false;

    let increasing = [];
    let index = 0;

    while(nums[index] < nums[index + 1]){
        index ++;
    }
    if(0 != index){
    increasing.push(0, index);
    }

    while(nums[index] > nums[index + 1]){
        index++;
    }
    if(increasing.at(-1) != index){
        increasing.push(increasing.at(-1), index)
    }

    while(nums[index] < nums[index + 1]){
        index++;
    }
    if(increasing.at(-1) != index){
        increasing.push(increasing.at(-1), index)
    }

    if(increasing.length == 6 && increasing.at(-1) == nums.length - 1){
        return true;
    }
    return  false;
};
