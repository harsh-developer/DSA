function mergeSort(array, start, end){
    if(start == end){
        return array;
    }
    let mid = Math.floor(start + (end - start) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid+1, end)
    return merge(array, start, mid, end)
}

function merge(array, start, mid, end){
    let arr1 = [];
    let arr2 = [];

    // mid-start + 1 is calculated by the indices passed in mergeSort function
    let lenArr1 = mid-start + 1;

    // (end - mid) is formed from ( end - (mid+1) + 1 ) but when these bracket will open these 1 will go 0;

    // so basically we are just doing (endIndex - startIndex + 1) as these index are from mergeSort function;
    
    let lenArr2 = end - mid;
    // copying the elements from original array to arr1
    for(let i = 0; i<lenArr1; i++){
        
        // array[start + i] means... (starting index + i) this starting index is from mergeSort function
        // in which it was called recursively
        arr1[i] = array[start + i]
    }

    // copying the elements from original array to arr2

    for(let j = 0; j<lenArr2; j++){

        // same here... this array[mid + 1 + j] means... (starting index + j) this starting index (mid+1) is from mergeSort
        // function in which is was called recursively
        arr2[j] = array[mid + 1 + j]
    }
    let a = 0;
    let b = 0;
    let c = start;
    while(a < lenArr1 && b < lenArr2){
        if(arr1[a] < arr2[b]){
            array[c] = arr1[a]
            a++;
        }
        else{
            array[c] = arr2[b]
            b++
        }
        c++
    }
    while(a < lenArr1){
        array[c] = arr1[a];
        a++
        c++
    }
    while(b < lenArr2){
        array[c] = arr2[b];
        c++;
        b++;
    }
    return array
}

let arr = [-10, 2, 7, 5, 3, 0, -18, 88, 99]
let start = 0;
let end = arr.length -1;
console.log(mergeSort(arr, start, end))