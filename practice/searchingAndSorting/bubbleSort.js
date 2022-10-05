function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([4, 5, 1, 3, 2, 4, 4, 2, 7, 6, 6]))