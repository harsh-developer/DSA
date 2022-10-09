function diagonalSum(mat) {
    const maxIdx = mat[0].length - 1;
    let sum = 0;
    for (let i = 0; i <= maxIdx; i++) {
        const left = mat[i][i];
        const right = mat[i][maxIdx - i];

        sum += (left + right)
        if (i === maxIdx - i) {
            sum -= left;
        }
    }

    return sum;
}
console.log(diagonalSum([[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]]))