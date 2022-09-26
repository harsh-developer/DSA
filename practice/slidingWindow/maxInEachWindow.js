// In a given array find the maximum value element of each window of size k

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
let output  = [];

// Brute Force
// for(let i = 0; i < (arr.length - k + 1); i++){
//     let max = arr[i]
//     for(let j = i; j < i+k; j++){
//         if(max < arr[j]){
//             max = arr[j];
//         }
//     }
//     output.push(max);
// }
// console.log(output);



//=============================================================================================================//

// Efficient Approach
let deque = [];
for(let cel = 0; cel < k; cel++){
    while(deque.length > 0 && arr[cel] >= deque[deque.length -1]){
        deque.pop();
    }
    deque.push(cel);
}
for(let cel = k; cel < arr.length; cel++){
    output.push(arr[deque[0]])
    while(deque.length > 0 && arr[cel] >= deque[deque.length - 1]){
        deque.pop();
    }
    while(deque.length > 0 && cel - k >= deque[0]){
        deque.shift();
    }
    deque.push(cel);
}
output.push(arr[deque[0]]);
console.log(output);