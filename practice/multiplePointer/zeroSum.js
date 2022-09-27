// In a sorted array find the pair which sums to 0

let arr = [-10, -8, -7, -4, 0, 2, 3, 5, 7, 11, 12, 15];
let start = 0;
let end = arr.length - 1
while(start < end){
    if(arr[start] + arr[end] > 0){
        end--
    }
    if(arr[start] + arr[end] < 0){
        start++
    }
    if(arr[start] + arr[end] == 0){
        console.log(arr[start], arr[end]);
        break;
    }
}