// Find a target element in a SORTED array
// Binary search is only applicable on sorted array
// Binary search is not suitable for very large data sets (billions and more than billion) there exist
// more search algorithms better than binarySearch

// Binary search without recursion
// function search(arr, target){
//     let start = 0;
//     let end = arr.length -1
//     while(start <= end){
//         let mid = Math.floor(start + (end - start)/2)
//         if(arr[mid] == target){
//             return mid
//         }
//         else if(arr[mid] < target){
//             start = mid+1
//         }
//         else if(arr[mid] > target){
//             end = mid-1;
//         }
//     }
//     return -1;
// }
// console.log(search([3, 7, 11, 34, 78, 90, 96, 98], 78))


// Binary search using recursion

function binarySearch(arr, start, end, target){
    while(start <= end){
        let mid = Math.floor(start + (end-start)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] > target){
            return binarySearch(arr, start, mid, target)
        }
        else if(arr[mid] < target){
            return binarySearch(arr, mid, end, target);
        }
    }
    return -1;
}
let arr = [-12, -7, 0, 1, 7, 12, 15, 45]
let start = 0;
let end = arr.length-1
let target = 7
console.log(binarySearch(arr, start, end, target));