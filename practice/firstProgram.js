const ps = require("prompt-sync");
// const input = ps();

const input = ps({sigint: true});
// Here we are making sure that, if after starting the execution of program when program is asking for input, if someone hit ctrl+c, so it will nor execute further... if we didn't do this... the program will give output that is written inside the console.log() but it will show null in the place of input. 

// We can write the same thing this way as well.
// const input = require("prompt-sync")({sigint: true})
//===============================================================================================================//



//===================================================Questions===================================================//

// Q1 => Write a program to print whether a number is even or odd, also take input from the user.
/*
let a = 12;
if(a%2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}
*/


//===============================================================================================================//
// Q2 => Take name as input and print a greeting message for that partiuclar name.

// var name = input("Enter your name: ");
// console.log("Hello" + " " + name + " " + "Keep shining, keep growing!")
// console.log(`Hello ${name} keep growing, keep shining.`)



//===============================================================================================================//
// Q3 => Write a program to input principal, time and rate (P, R, T) from the user and find Simple Interest.
/*
var principal = 100000;
var rate = 7;
var time = 2;
var SI = (principal*rate*time)/100
console.log(SI)
*/


//===============================================================================================================//
// Q4 => Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)
/*
var a = 20;
var b = 5;
var sum, sub, product, devide;
if(sum){
    console.log(a+b);
}
if(sub){
    console.log(a-b);
}
if(product){
    console.log(a*b);
}
if(devide){
    console.log(a/b);
}
console.log(sub);
*/

//===============================================================================================================//
// Q5. Take 2 numbers as input and print the largest number
/*
let a = 15;
let b = 20;
if(a>b){
    console.log(a);
}
else{
    console.log(b)
}
*/


//===============================================================================================================//
// Q6. Input currency in ruppe, give output in USD.
/*
var rupee = 100;
var USD = rupee*80;
console.log(`Rs${rupee} in USD is ${USD}$`)
*/


//===============================================================================================================//
// Q7. Calculate Fibonacci Series up to n numbers.


// var a = parseInt(input("Enter a number: "))
// var b = parseInt(input("Enter another number: "))
// var sum = a+b
// console.log(sum);