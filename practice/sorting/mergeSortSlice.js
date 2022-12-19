function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let start = 0;
    let end = arr.length;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(start, mid))
    let right = mergeSort(arr.slice(mid, end))
    return merge(left, right);
}

function merge(left, right){
    let output = [];

    while(left.length || right.length){
        if(left.length && right.length){
            if(left[0] < right[0]){
                output.push(left.shift());
            }
            else{
                output.push(right.shift());
            }
        }
        else if(left.length){
            output.push(left.shift());
        }
        else if(right.length){
            output.push(right.shift());
        }
    }
    return output;
}
console.log(mergeSort([3, 2, 8, 9, 12, 2, 1, 0]));

// =======================================================================================================================================

// ankita's code
//mergeSort


let arr = [4, 2, 8, 1, 9, 0]
console.log(arr)

function mergeSort(arr) {

    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(arr1, arr2) {

    let res = []

    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res;
}

console.log(mergeSort(arr))