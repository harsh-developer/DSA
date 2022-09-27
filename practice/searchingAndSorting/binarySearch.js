// In a sorted array return true if number num exists else return false

function binarySearch(arr, start, end, num){
    if(end >= start){
        let mid = Math.floor(start + (end-start)/2)
        if(arr[mid] == num){
            return true;
        }
        if(arr[mid] > num){
            return binarySearch(arr, start, mid-1, num);
        }
        if(arr[mid] < num){
            return binarySearch(arr, mid+1, end, num);
        }
    }
    return false;
}

let arr = [-4, -2, 0, 1, 3, 5, 7, 8, 11];
let start = 0;
let end = arr.length - 1
let num = 3;
console.log(binarySearch(arr, start, end, num))