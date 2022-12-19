function prodcutExceptSelf(nums) {
    let n = nums.length;
    let prefix = new Array(n);
    let suffix = new Array(n);
    let output = new Array(n);
    prefix[0] = 1;
    suffix[n - 1] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        output[i] = prefix[i] * suffix[i];
    }
    return output;
}

let nums = [12, 0]
console.log(prodcutExceptSelf(nums));


// second approach

function secondApproach(arr){
    let n = arr.length;
    let productOfArr = 1;
    for(let i = 0; i<n; i++){
        productOfArr *= arr[i];
    }
    let output = [];
    for(let i = 0; i<n; i++){
        output.push(productOfArr/arr[i]);
    }
    return output;
}
console.log(secondApproach([1, 2, 3, 4, 0]));