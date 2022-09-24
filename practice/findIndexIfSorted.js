// In a given unsorted array find index of 'K' if array will be sorted


// Approach:- Iterate over the array and keep track of how many elements are less than k and then calculate the index accordingly;

// 1, 2, 3, 4,


let arr = [4, 3, 1, 9, 8, 2, 5, 0, 7, 6];
let k = 4;
let count = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] < k){
        count++;
    }
}
console.log(count);