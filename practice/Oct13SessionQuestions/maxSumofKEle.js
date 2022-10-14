// Find the maximum sum of k consecutive elements in an array

// Brute Force Approach
/*
function maxSum(arr, k){
    if(arr.length < k){
        return;
    }
    let maxSum = -Infinity
    for(let i = 0; i<arr.length - k; i++){
        let currSum = 0
        for(let j = i; j<k+i; j++){
            currSum += arr[j]
        }
        if(currSum > maxSum){
            maxSum = currSum
        }
    }
    return maxSum
}
console.log(maxSum([11, 12, 10, 9, 8, 5, 7], 3))
*/


// Optimized Approach

function maxSumWindow(arr, k){
    if(arr.length < k){
        return 
    }
    let maxSum = -Infinity;
    let currSum = 0;
    let prevWinSum = 0;
    for(let i = 0; i<k; i++){
        prevWinSum += arr[i];
    }
    for(let j = k; j<arr.length - k; j++){
        // currSum = prevWinSum + arr[]
    }
}