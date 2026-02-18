// 693. Binary Number with Alternating Bits

function hasAlternatingBits(n: number): boolean {
     let binnaryRep = n.toString(2);
    let curr = null;
    let next = null;

    for(let i = 0; i < binnaryRep.length - 1; i++){
        curr = binnaryRep[i];
        next = binnaryRep[i+1];

        if(curr == next){
            return false
        }
    }
    return true;
};
