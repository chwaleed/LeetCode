// 1009. Complement of Base 10 Integer

function bitwiseComplement(n: number): number {
    let binnaryRep = n.toString(2).split('');
    for(let i = 0; i < binnaryRep.length; i++){
        binnaryRep[i] == '0' ? binnaryRep[i] = '1' : binnaryRep[i] = '0';

    }
    return parseInt(binnaryRep.join(''),2)
};
