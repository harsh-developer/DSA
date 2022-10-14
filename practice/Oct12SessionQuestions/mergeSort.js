// Sort an array using merge sort

function mergeSort(array, start, end) {
    // base case
    if (start >= end) {
        return array;
    }
    let mid = Math.floor(start + (end - start) / 2);
    // divide and conquer method
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    return merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
    let arr1 = [];
    let arr2 = [];
    let lenArr1 = mid - start + 1
    let lenArr2 = end - mid;

    // copy the data in the respective array arr1
    for (let i = 0; i < lenArr1; i++) {
        arr1[i] = array[start + i]
    }

    // copy the data in the respective array arr2
    for (let j = 0; j < lenArr2; j++) {
        arr2[j] = array[mid + 1 + j]
    }
    let a = 0;           // we will maintain index of arr1   
    let b = 0;          // we will maintain index of arr2
    let c = start;      // index of array (main array which user is giving as input);
    while (a < lenArr1 && b < lenArr2) {
        if (arr1[a] <= arr2[b]) {
            array[c] = arr1[a];
            a++
        }
        else {
            array[c] = arr2[b]
            b++
        }
        c++
    }
    while (a < lenArr1) {
        array[c] = arr1[a]
        a++
        c++
    }
    while (b < lenArr2) {
        array[c] = arr2[b];
        b++
        c++
    }
    return array;
}

let arr = [3, 2, 12, -7, 13, -5, 33, 17, 99, 65]
let start = 0;
let end = arr.length - 1;
console.log(mergeSort(arr, start, end))