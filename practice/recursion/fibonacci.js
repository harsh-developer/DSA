// take an input an and find the n-th number in the fibonacci series

function fibonacci(n){
    if(n <= 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(10));