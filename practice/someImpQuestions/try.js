// const obj = {name: "harsh"};
// const arr = [obj, obj, obj];
// arr[0].name = 'harssh';
// console.log(arr)


// function missingNumber(arr, n){
//     let arrSum = n*(n+1)/2;
//     let givenArrSum = 0;
//     for(var i = 0; i<arr.length; i++){
//         givenArrSum = givenArrSum + arr[i]
//     }
//     let missingNumber = arrSum - givenArrSum;
//     return missingNumber;
// }
// var arr = [1,2,3,5]
// var n = arr.length
// console.log(missingNumber(arr))

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



//==================================================================================================//

// Palindrome Number
// var x = 121
// var num = x;
// var checkAns = 0;
// while (num > 0) {
//     var rem = num % 10;
//     checkAns = checkAns * 10 + rem;
//     num = Math.floor(num / 10);
// }
// if (checkAns == x) {
//     console.log("Yes");
// }
// else{
//     console.log("No")
// }
// // return false;


// let arr1 = [1,2,3];
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2));

function areRotations(s1, s2)
    {
        // code here
        let map = new Map();
        for(let i = 0; i< s1.length; i++){
            map.set(s1[i], map.get(s1[i]) + 1 || 1 )
        }
        for(let i =0; i<s2.length; i++){
            map.set(s2[i], map.get(s2[i]) - 1);
            if(map.get(s2[i]) == 0){
                map.delete(s2[i]);
            }
        }
        if(map.size == 0){
            return 1;
        }else{
            return 0;
        }
    }
    console.log(areRotations("mightandmagic", "andmagicmigth"))