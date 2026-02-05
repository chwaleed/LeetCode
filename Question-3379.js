// 3379. Transformed Array

function constructTransformedArray(nums: number[]): number[] {
    let n = nums.length;
    let result: number[] = [];

    for (let i = 0; i < n; i++) {

        let newIndex = (i + nums[i]) % n;

        if (newIndex < 0) newIndex += n;

        result.push(nums[newIndex]);
    }

    return result;
}

