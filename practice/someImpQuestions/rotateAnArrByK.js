// Rotate an array by K elements

// function rotateArrByK(arr, k){
//     arr = rotateArr(arr, 0, arr.length - 1)
//     // k%10 is for handling a case, when k's value is greater than the length of the array
//     k = k%10
//     // 5, 4, 3, 2, 1
//     let left = rotateArr(arr.slice(0, k), 0, k -1)
//     let right = rotateArr(arr.slice(k, arr.length), 0, arr.length - k - 1)
//     let result = left.concat(right)
//     return result;
// }

// function rotateArr(arr, start, end){
//     while(start < end){
//         arr[start] = arr[start] + arr[end];
//         arr[end] = arr[start] - arr[end];
//         arr[start] = arr[start] - arr[end];
//         start++;
//         end--
//     }
//     return arr;
// }
// console.log(rotateArrByK([1, 2, 3, 4, 5], 11))