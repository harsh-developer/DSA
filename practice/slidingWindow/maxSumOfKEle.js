// Q:- From a given array, calculate the maximum sum of 'k' consecutive elements.

// Brute Force Approach:- Using nested loop
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let k = 3;
// let maxSum = 0;
// for(let i = 0; i<arr.length - k + 1; i++){
//     var sum = 0;
//     for(let j = 0; j < k; j++){
//         sum += arr[i+j];
//         if(sum > maxSum){
//             maxSum = sum;
//         }
//     }
// }
// console.log(maxSum);


// Optimized approach:- Using sliding window
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let k = 3;
let maxSum = 0;
let currWinSum = 0;
for(let i = 0; i<k; i++){
    currWinSum += arr[i];
    maxSum = currWinSum;
}
for(let i = k; i < arr.length; i++){
    currWinSum += arr[i] - arr[i - k];
    if(currWinSum > maxSum){
        maxSum = currWinSum;
    }
}
console.log(maxSum);