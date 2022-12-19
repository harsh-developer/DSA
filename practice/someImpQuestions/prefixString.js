function commonPrefix(str) {
    let prefix = ""
    if (str.length === 0 || str === null) return prefix
    for (let i = 0; i < str[0].length; i++) {
        let char = str[0][i]//0th index 1st char i.e-f
        for (let j = 1; j < str.length; j++) {
            if (str[j][i] != char) {//check oth chra of1st index of the array
                return prefix
            }
        }
        prefix = prefix + char //prefix="f","fl"
    }
    return prefix

}
let str = ["flower", "flow", "flight"];
console.log(commonPrefix(str))