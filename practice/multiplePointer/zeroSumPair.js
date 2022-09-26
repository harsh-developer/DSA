// In a sorted array find the pair which has sum 0

let arr = [-5, -3, -2, 1, 5, 7];
let start = 0;
let end = arr.length - 1
while(start < end){
    if(arr[start] + arr[end] < 0){
        start++
    }
    if(arr[start] + arr[end] > 0){
        end--
    }
    if(arr[start] + arr[end] == 0){
        console.log(arr[start], arr[end]);
        break;
    }
}