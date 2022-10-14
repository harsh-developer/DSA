// Sort an array using insertion sort

function insertionSort(arr) {
    for (let right = 1; right < arr.length; right++) {
        let currEle = right;
        while (currEle >= 1 && arr[currEle - 1] > arr[currEle]) {
            [arr[currEle - 1], arr[currEle]] = [arr[currEle], arr[currEle - 1]]
            currEle--;
        }
    }
}

let arr = [5, 4, 3, 7, 2, 0, -5, 12]
insertionSort(arr)
console.log(arr);