// Sort an array using merge Sort

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    // let mid = Math.floor(arr.length / 2);
    let mid =  arr.length/2
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length))
    return merge(left, right);
}

function merge(first, second) {
    let output = new Array(first.length + second.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while (first.length || second.length) {
        if(first.length && second.length){
            if(first[i] < second[j]){
                output[k] = first[i];
                i++;
            }else{
                output[k] = second[j];
                j++
            }
            k++
        }
        else if(first.length){
            output[k] = first[i];
            i++
            k++ 
        }
        else{
            output[k] = second[j];
            j++;
            k++
        }
    }
    return output;
}

let array = [4, 3, 2,1]
console.log(mergeSort(array))
console.log(mergeSort([3, 2, 1, 0]))

// function merge(left, right) {
//     var result = [];
//     while (left.length || right.length) {
//         if (left.length && right.length) {
//             if (left[0] < right[0]) {
//                 result.push(left.shift())
//             } else {
//                 result.push(right.shift())
//             }
//         } else if (left.length) {
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }
//     return result;
// }
console.log(mergeSort([0, 3, 2, 1, -1]))