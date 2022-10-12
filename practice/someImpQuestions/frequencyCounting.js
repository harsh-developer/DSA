// Count frequency of elements of an array

// Optimized approach 

let arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 9];
let frequencyMap = new Map();
for(let i = 0; i<arr.length; i++){
    if(frequencyMap.has(arr[i])){
        frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1)
    }
    else{
        frequencyMap.set(arr[i], 1);
    }
}
console.log(frequencyMap);