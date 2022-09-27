// In a sorted array, find elements whose sum is closest to target element K

let arr = [10, 22, 28, 29, 30, 40]
let k = 54;
let start = 0;
let resultLeft = 0;
let resultRight = 0;
let end = arr.length - 1
let difference = Infinity;
while (start < end) {
    if(Math.abs(arr[start] + arr[end] - k) < difference){
        resultLeft = start;
        resultRight= end;
        difference = Math.abs(arr[start] + arr[end] - k)
    }
    else if(arr[start] + arr[end] > k){
        end--
    }
    else if(arr[start] + arr[end] < k){
        start++
    }
}
console.log(arr[resultLeft], arr[resultRight]);