// 1200. Minimum Absolute Difference


function minimumAbsDifference(arr: number[]): number[][] {
    let result = [];
    let n = arr.length;
    let sortedArray = arr.sort((a, b) => a - b);
    let minDiff = Infinity;

    for(let i = 0; i < n - 1; i++ ){
        let diff = Math.abs(sortedArray[i + 1] - sortedArray[i]);
        if(diff == minDiff){
            result.push([sortedArray[i], sortedArray[i + 1]])
        }
        if(diff < minDiff){
            minDiff = diff;
            result = [[sortedArray[i], sortedArray[i + 1]]]
        }

    }

    return result;
};
