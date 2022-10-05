function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let last = arr.length - i - 1;
        let maxIndex = getMaxIndex(arr, start, last);
        swap(arr, maxIndex, last);
    }
    return arr;
}

function getMaxIndex(arr, start, end) {
    let max = start;
    for (let i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i
        }
    }
    return max;
}

function swap(arr, first, second) {
    arr[first] = arr[first] + arr[second];
    arr[second] = arr[first] - arr[second];
    arr[first] = arr[first] - arr[second]
}

let start = 0
console.log(selectionSort([4, 3, 2, 0, 1, 1]))