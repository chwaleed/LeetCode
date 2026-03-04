function numSpecial(mat: number[][]): number {
    const rows = mat.length;
    const cols = mat[0].length;

    const rowSum = new Array(rows).fill(0);
    const colSum = new Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1) {
                rowSum[i]++;
                colSum[j]++;
            }
        }
    }

    let specialCount = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
                specialCount++;
            }
        }
    }

    return specialCount;
};
