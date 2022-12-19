function str(string) {
    let newString = string.split(" ")
    let output = []
    console.log(newString)
    let start = 0;
    let end = newString.length;
    while(start < end){
        
    }
    for (let i = 0; i < newString.length; i++) {
        // output.push(newString[i] + "%");
        output.push(newString[i]);
        output.push("%")
    }
    return output.join("")

}

let string = "My name is Harsh";
console.log(str(string));