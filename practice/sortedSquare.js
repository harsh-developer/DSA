// given a sroted array that have negative and positive integers as well... return an array having square of those elements that too in sorted manner
let arr = [-4, -1, 0, 2, 5];
let start = 0;
let end = arr.length -1;
let answer  = [];
let k = arr.length -1;
while(start <= end){
    if(Math.abs(arr[start]) > Math.abs(arr[end])){
        answer[k] = arr[start] * arr[start];
        start++;
    }
    else{
        answer[k] = arr[end] * arr[end];
        end--;
    }
    k--;
}
console.log(answer);
