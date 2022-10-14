// Leetcode questions:- Richest customer
// input: account = [[2, 8, 7], [1, 9, 5]]
// output: 17

function calculateTotalSum(banks){
    let totalAmount = 0;
    for(let balance of banks){
        totalAmount += balance;
    }
    return totalAmount;
}

function calculateRichestPerson(account){
    let maxAmount = -Infinity;
    for(let customer of account){
        maxAmount = Math.max(calculateTotalSum(customer), maxAmount)
    }
    return maxAmount
}
console.log("Richest person's wealth is:-",calculateRichestPerson([[1, 2, 3], [2, 3, 4]]))