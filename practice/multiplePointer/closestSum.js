// In a sorted array, find elements whose sum is closest to target element K

let arr = [-6, -3, -1, 3, 5, 7, 12, 13, 15, 20]
let k = 29;
let start = 0;
let end = arr.length - 1
let difference = 0;
while(start > end){
    if(arr[start] + arr[end] <= k){
        difference = k - (arr[start] + arr[end]);
        start++;
    }
    if(arr[start] + arr[end] >= k){
        end--;
    }
}
console.log(arr[start], arr[end]);