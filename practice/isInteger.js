function isInt(input) {
    let isInteger = true;
    for(let i = 0; i<input.length; i++){
        if(input < 0){
            break;
        }
        if(input[i] >= 0){
            continue;
        }
        else{
            isInteger = false;
            break;
        }
    }
    return isInteger
}
let input = "-167732";
console.log(isInt(input));