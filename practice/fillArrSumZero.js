// Given an integer n, return any array containing n unique integers such that they add up to 0.

function sumZero(n) {
    let arr = []
    let sum = 0
    for (let j = 1; j < n; j++) {
        arr.push(-j)
        sum += j
    }
    arr.push(sum)
    return arr
};
console.log(sumZero(4))