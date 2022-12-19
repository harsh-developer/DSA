// function fruits(fruit){

//     if(fruit == "Mango"){
//         return "Madhav like mangoes"
//     }
//     if(fruit == "Apple"){
//         return "I am apple"
//     }
//     if(fruit == "Guava"){
//         return "I am guava"
//     }
//     if(fruit == "Papaya"){
//         return "I am papaya"
//     }
    
//     if(fruit == "Banana"){
//         return "I am banana"
//     }
//     if(fruit == "Grapes"){
//         return "We are grapes"
//     }
// }
// console.log(fruits("Mango"))


let fruits = {
    "mango" : "I am mango",
    "apple" : "I am apple",
    "banana": "I am banana"
}

function table(item){
    return fruits[item]
}
console.log(table("apple"))