// Approach 1:- When result variable is declared inside function so we need to use concat
// Because when we declare result inside function, so when an element arr[i] is found as array so the recursive call for the function will be called and because result is declared inside function so this variable will also be re-assigned and this result array will be empty again.

// function flatArr(arr){
//     let result = []
//     for(let i = 0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flatArr(arr[i]));
//         }
//         else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(flatArr([1,[ 2, 3, 4], 5, 6, [7, [8, [9, [10, 1]], 2], 4, 5], 3,2 ,4 ,3]))




// Approach 2:- When result variable is declared outside the function, we don't need to use concat

let result = []
function flatArr(arr){
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flatArr(arr[i])
        }
        else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatArr([1,[ 2, 3, 4], 5, 6, [7, [8, [9, [10, 1]], 2], 4, 5], 3,2 ,4 ,3]))