// In an array, find the elemtns without a pair (find element whose count is odd)
// intput = [11, 1, 11, 7, 3, 1, 12, 12, 5, 12, 3] => output = [7, 12, 5]

function withoutPair(arr){
    let frequency = new Map();
    let output = [];
    for(let i = 0; i<arr.length; i++){
        if(frequency.has(arr[i])){
            frequency.set(arr[i], frequency.get(arr[i]) + 1)
        }
        else{
            frequency.set(arr[i], 1);
        }
    }
    for(var pairs of frequency){
        if(pairs[1]%2 != 0){
            output.push(pairs[0])
        }
    }
    return output
}
console.log(withoutPair([11, 1, 11, 7, 3, 1, 12, 12, 5, 12, 3]))