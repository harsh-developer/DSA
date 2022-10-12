function fibonacci(num){
    if(num == 0){
        return 0;
    }
    if(num == 1 || num == 2){
        return 1;
    }
    let fibbo = fibonacci(num-1) + fibonacci(num-2);
    return fibbo;
}

console.log(fibonacci(15))