// In a sorted array find the pair which sums to k

let arr = [-10, -8, -7, -4, 0, 2, 3, 5, 7, 11, 12, 15];
let k = 4;
let start = 0;
let end = arr.length - 1
while(start < end){
    if(arr[start] + arr[end] < k){
        start++
    }
    if(arr[start] + arr[end] > k){
        end--;
    }
    if(arr[start] + arr[end] == k){
        console.log(arr[start], arr[end]);
        start++
        end--
    }
}