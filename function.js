//Sum of an array using function and for loop

// function findSum(a) {
//     let sum = 0
//     for (let i = 0; i < a.length; i++) {
//         sum = sum + a[i]
//     }
//     return sum
// }
// console.log(findSum([1,2,3,4,5]))

// ==================================================================================================

// find an element inside an array if present return indexOf that element otherwise return -1
let b = 3; 
let arr2 = [1,2,3,4,5,6,7];
function findElement(a, arr){
    for(let i= 0; i<arr.length; i++){
        if(arr[i] != a){
            return 1
        }
    }
    return -1
}
console.log(findElement(b, arr2))