// sum of k largest elements:

function maxEle(arr) {
    let maxEle = -Infinity;
    let maxInx;
    for (let i = 0; i < arr.length; i++) {
        if (maxEle < arr[i]) {
            maxEle = arr[i];
            maxInx = i;
        }
    }
    return [maxEle, maxInx];
}
// console.log(maxEle([2, 5, 7, 2, 1, 8]));

let result;
let sum = 0;
function sumKMaxEle(arr, k) {
    if(k > arr.length){
        return `invalid input ${k}`;
    }
    // base case
    if (k === 0) {
        return sum;
    }
    result = maxEle(arr);
    // this splice is deleting one element from original array that is the maximum element of that array at that time 
    arr.splice(result[1], 1);
    k = k - 1;
    sum = sum + result[0];
    return sumKMaxEle(arr, k);
}
let arr = [8, 11, 13, 14, 16, 0, 7, 9, 10, 22, 19];
console.log(sumKMaxEle(arr, 10));