// function longestDistinctSubstring(str){
//     let seen = new Map();
//     let start = 0;
//     let maxLength = 0;
//     for(let i = 0; i<str.length; i++){
//         if(seen.has(str[i])){
//             if(start < seen.get(str[i]) + 1){
//                 start = seen.get(str[i]) + 1
//             }
//         }
//         seen.set(str[i], i);
//         if(maxLength < (i -start +1)){
//             maxLength = i-start+1
//         }
//     }
//     return maxLength;
// }

// console.log(longestDistinctSubstring("abcda"))


function longestDistinctSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let seen = new Map();
    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            if (start < seen.get(str[i]) + 1) {
                start = seen.get(str[i]) + 1
            }
        }
        seen.set(str[i], i);
        if (maxLength < (i - start + 1)) {
            maxLength = i - start + 1
        }
    }
        return maxLength
}
console.log(longestDistinctSubstring("abcda"))