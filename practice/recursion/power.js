// calculate nth power an input using recursion

function power(num, n){
    if(n == 0){
        return 1;
    }
    return num * power(num, n-1);
}
console.log(power(2, 2));