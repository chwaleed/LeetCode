// 3314. Construct the minimum bitwise Array 1

function minBitwiseArray(nums: number[]): number[] {
    let array = [];

    for(let i = 0; i < nums.length; i++){
        let number = null;
        for(let j = 0; j < nums[i]; j++){
            if((j | j+1) == nums[i]){
                number = j;
                break;
            }
        }
        if(!number){
            array.push(-1)
        }else{
            array.push(number);
        }
    }
    return array
};
