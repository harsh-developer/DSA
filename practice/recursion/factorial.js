// calculate factorial of input number

// using iteration
function factorial(n){
    let result = 1;
    for(let i = n; i > 0; i--){
        result *= i
    }
    return result;
}
console.log(factorial(10));

// using recursion
function recursiveFactorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n*recursiveFactorial(n-1)
}
console.log(recursiveFactorial(10));