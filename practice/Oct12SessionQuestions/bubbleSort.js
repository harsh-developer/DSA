function bubbleSort(arr){
    for(let i =0; i<= arr.length; i++){
        let swap = false;
        for(let j=0; j<=arr.length; j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j] + arr[j+1];
                arr[j+1] = arr[j] - arr[j+1];
                arr[j] = arr[j] - arr[j+1];
                swap = true;
            }
        }
        if(swap == false){
            break;
        }
    }
    return arr;
}
console.log(bubbleSort([4, 2, -4, 12, 11, 7]))