// 3713. Longest Balanced Substring I

function longestBalanced(s: string): number {
    let n = s.length;
    let longest = 0;

    for(let i = 0; i < n; i++){
        let hashMap = new Map();
        for(let j = i; j < n; j++){
            hashMap.set(s[j], (hashMap.get(s[j]) ?? 0) + 1)

            const values = [...hashMap.values()];
            const allSame = values.every(v => v === values[0]);
            if(allSame){
                longest = Math.max(longest, j - i +1 )
            }
        }
    }
    return longest;
};
