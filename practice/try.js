// const obj = {name: "harsh"};
// const arr = [obj, obj, obj];
// arr[0].name = 'harssh';
// console.log(arr)


function missingNumber(arr, n){
    let arrSum = n*(n+1)/2;
    let givenArrSum = 0;
    for(var i = 0; i<arr.length; i++){
        givenArrSum = givenArrSum + arr[i]
    }
    let missingNumber = arrSum - givenArrSum;
    return missingNumber;
}
var arr = [1,2,3,5]
var n = arr.length
console.log(missingNumber(arr))