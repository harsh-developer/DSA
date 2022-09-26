function palindrome(num){
    let temp = 0;
    if(num == 0){
        return temp;
    }
    temp = (temp*10) + (num%10)
    return palindrome(Math.floor(num/10));
}
console.log(palindrome(121))