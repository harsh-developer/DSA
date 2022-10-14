// Convert an array of numbers to an array of strgins in such a way that
// input:- 1 => output: [a]
// input:- [1, 2, 3] =? output:- ["a", "ab", "abc"]

function generateString(number){
    let alphabet= "abcdefghijklmnopqrstuvwyxz";
    let finalStr = "";
    let currIndex = 0;
    while(currIndex < number){
        // %26 because in case, when input is greater than 26 this will again start from a
        finalStr += alphabet[currIndex%26]      
        currIndex++
    }
    return finalStr;
}

function convertNumToString(arr){
    for(let i = 0; i<arr.length; i++){
        arr[i] = generateString(arr[i])
    }
    return arr
}

let arr = [7, 12, 26, 31]
console.log(convertNumToString(arr))
// console.log(generateString(2))


function convertNumsToStrings(arr){
    let maxNumber = Math.max(...arr)
    let encodeArr = [];
    for(let i = 0; i<= maxNumber; i++){
        encodeArr.push(generateString(i));
    }
    for(let i = 0; i<arr.length; i++){
        
    }
}