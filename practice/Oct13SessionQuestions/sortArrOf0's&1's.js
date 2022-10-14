// Sort an array which contains only 0's and 1's

// In this approach we are doing two iterations, so an optimized approach still exists;
/*
function sort01(arr){
    let curr = 0;
    let count0 = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 0){
            count0++
        }
    }
    let count1 = arr.length - count0;
    while(count0 > 0){
        arr[curr] = 0;
        count0--;
        curr++;
    }
    while(count1 > 0){
        arr[curr] = 1;
        count1--;
        curr++;
    }
}
let arr = [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
sort01(arr)
console.log(arr);
*/

// Optimized approach => One iteration only

function sort01(arr){
    let left = 0;                   // at 0 index (first element)
    let right = arr.length - 1;     // at last element of the array
    
    // if left > rigth then sorting is completed both cross each other
    while(left < right){

        // if current value at left is 0 then it is at its correct position we don't need to do anything
        // this loop will break, if and only if arr[left] value if 1
        while(arr[left] == 0 && left < right){
            left++;
        }
        while(arr[right] == 1 && left < right){
            right--;
        }
        // if already sorted, do nothing else swap left element with right
        if(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
    } 
}
let arr = [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0];
sort01(arr)
console.log(arr);