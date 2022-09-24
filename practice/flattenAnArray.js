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



function flatArr(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatArr(arr[i]));
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatArr([1,[ 2, 3, 4], 5, 6, [7, [8, [9, [10, 1]], 2], 4, 5], 3,2 ,4 ,3]))