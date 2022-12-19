//=======================================inbuilt and recursion=======================================//
function sum(n){
    if(n === 0 || n === 1){
        return n;
    }
    return Math.pow(n, n) + sum(n - 1);
}


//=====================================without inbuilt recursion=====================================//
function pow(n) {
    let output = 1;
    for (let i = 1; i <= n; i++) {
        output = output * n;
    }
    return output;
}

// function powSum(num) {
//     if (num === 0 || num === 1) {
//         return num;
//     }
//     return pow(num) + powSum(num - 1);
// }


//=============================================iterative=============================================//
function powSum(n){
    let output = 1;
    for(let i = 2; i <= n; i++){
        console.log(output);
        output += pow(i);
    }
    return output;
}

console.log(powSum(6));