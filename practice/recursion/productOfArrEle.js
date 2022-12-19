// find product of array element using recursion

function productOfEle(arr){
    if(arr.length == 0){
        return 1;
    }
    let ele = arr.pop();
    return ele * productOfEle(arr);
}
console.log(productOfEle([1, 2, 3, 4, 2]));

// let arr = [0, 1, 2, 3,];
// let b = arr.pop();
// console.log("arr =>", arr);
// console.log("b =>", b);

function productOfArrEle(arr){
    if(arr.length == 0){
        return 1;
    }
    return arr[0] * productOfArrEle(arr.slice(1));
}
console.log(productOfArrEle([1, 2, 3, 4]));