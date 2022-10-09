// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i-j) <= k

// Naive approach
// function containsDuplicate(nums, k){
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i] == nums[j] && Math.abs(i-j) <= k){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

let nums = [1,2,3,1,2,3]
let k =3

// console.log(containsDuplicate(nums, k))


// Optimized Approach

function containsDuplicate(nums, k){
    let visited = new Map();
    for(let i = 0; i<nums.length; i++){
        if(visited.has(nums[i])){
            if(Math.abs(visited.get(nums[i]) - i) <= k){
                return true;
            }
        }
        visited.set(nums[i], i);
    }
    return false;
}
console.log(containsDuplicate(nums, k))