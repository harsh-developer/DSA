// Merge two sorted array in sorted manner

let arr1 = [1, 3, 5, 7, 9, 11, 13, 14, 14, 14];
let arr2 = [2, 4, 6, 8, 10, 12, 14, 15, 16, 17,18, 19, 20, 21];
let i = 0;
let j = 0;
let output = [];
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        output.push(arr1[i]);
        i++;
    }
    else {
        output.push(arr2[j]);
        j++
    }
}
while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    output.push(arr2[j]);
    j++
}
console.log(output);


//=============================================================================================================//

// Merge two sorted arrays in such a manner that 
/** arr1 = [1,2,3,0,0,0],
 *  m = 3, arr2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6] */

// let arr1 = [1, 2, 3, 0, 0, 0];
// let arr2 = [2, 5, 6];
// var i = 0;
// var j = 0;
// var output = [];
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] == 0) {
//         i++;
//         continue;
//     }
//     if (arr2[j] == 0) {
//         j++;
//         continue;
//     }
//     if (arr1[i] < arr2[j] && arr1[i] != 0 && arr2[j] != 0) {
//         output.push(arr1[i]);
//         i++;
//     }
//     else {
//         output.push(arr2[j])
//         j++;
//     }
// }
// while (i < arr1.length) {
//     output.push(arr1[i]);
//     i++;
// }
// while (j < arr2.length) {
//     output.push(arr2[j]);
//     j++;
// }
// console.log(output);   