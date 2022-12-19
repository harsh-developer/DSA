// function fibonacci(num){
//     if(num == 0){
//         return 0;
//     }
//     if(num == 1 || num == 2){
//         return 1;
//     }
//     let fibbo = fibonacci(num-1) + fibonacci(num-2);
//     return fibbo;
// }

// console.log(fibonacci(15))

// fibonacci series
function fibonacciSeries(num){
    if(num == 0){
        return 0;
    }
    if(num == 1 || num == 2){
        return 1;
    }
    return fibonacciSeries(num-1) + fibonacciSeries(num -2)
}
console.log(fibonacciSeries(10))