// Q First negative integer in every window of size k

// Brute Force
let arr = [-8, 2, 3, -6, 10];
let k = 2;
let flag;
let n = arr.length;
let output = [];
for (let i = 0; i < (n - k + 1); i++) {
    flag = false;
    for (let j = 0; j < k; j++) {
        if (arr[i + j] < 0) {
            output.push(arr[i+j])
            flag = true;
            break;
        }
    }
    if (flag == false)
        output.push(0);
}
console.log(output)