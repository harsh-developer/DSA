// print 1 to n using recursion

// function printOneToN(n){
//     if(n==1){
//         return 1;
//     }
//     return printOneToN(n-1) + n;
// }
// console.log(printOneToN(10));

//=====================================================================================================//
// function printNumbers(n){
//     if(n == 1)
//         return 1;
//     if( n < 0){
//         return 'invalid';
//     }
//     return  printNumbers(n-1)//, printNumbers(n-2);
//     // return result;
// }
// console.log(printNumbers(9))


//========================================================================================================//
//power of 2

// function powerOfTwo(n){
//     if(n === 0){
//         return 1;
//     }
//     else
//     {
//         return 2 * powerOfTwo(n-1);
//     }
// }
// console.log(powerOfTwo(16));


//=======================================================================================================================================//

// Power of any number...

// var powerOfTwo = function(a, n) 
// {
//    if (n === 0) 
//    {
//     return 1;
//     }
//   else 
//   {
//     return a * powerOfTwo(a, n-1);
//   }
// };
// console.log(powerOfTwo(5, 5));


//=======================================================================================================================================//
//check a number is power of 2 or not...
// var isPowerOfTwo = function(n) {
//     if (n <= 0) return false;
//     return (n & (n-1)) === 0 ;
// };
// console.log(isPowerOfTwo(-8));


//=======================================================================================================================================//
//Find Fibonacci number
// function fibo(n){
//     if(n <= 2){
//         return 1;
//     }
//     return fibo(n-1) + fibo(n-2);
// }
// console.log(fibo(5))



//=======================================================================================================================================//
// Product of all elements of the array
// function product(arr){
//     if(arr.length == 0){
//         return 1;
//     }
//     return arr[0]*product(arr.splice(1));
// }
// console.log(product([1,2,3,4,120]))

function solution(a){
    let i = 2;
    function isPrime(i){
        if(i >= a){
            return;
        }
        if(a%i === 0){
            return 0;
        }
        i++
        return isPrime(i)
    }
    return isPrime(i);
        return 1
}

console.log(isPrime(7))