// str = "THIS IS AN INTERESTING SESSION"

// output = "SIHT SI NA GNITSERETNI NOISSES"

let str = "bhushan"
var reverse = (str) => {
    if(str.length <= 1){
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}
// console.log(reverse(str))

var reverseSent = (sentense) => {
    let splitted = sentense.split(" ");
    for(let i = 0; i<splitted.length; i++){
        splitted[i] = reverse(splitted[i]);
    }
    return splitted.join(" ");
}
console.log(reverseSent("conscientiousness"));