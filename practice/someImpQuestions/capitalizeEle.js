// Capitalize first letter of each string inside in array
// ["apple", "boy", "cat"] => ["Apple", "Boy", "Cat"]

function capitalize(arr, index){
    if(index < arr.length){
        arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1)
        capitalize(arr, index+1)
    }
    return arr
}

console.log(capitalize(["apple", "boy", "cat"], 0))