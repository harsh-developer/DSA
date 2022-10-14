// There is an array of animals, The animmals can be repeated. Give me the data that how many time each 
// animal is being repeated

function countAnimals(animals){
    let animalFreq = new Map();
    for(let animal of animals){
        if(animalFreq.has(animal)){
            animalFreq.set(animal, animalFreq.get(animal) + 1)
        }
        else{
            animalFreq.set(animal, 1);
        }
    }
    return animalFreq
}
console.log(countAnimals(["dog", "lion", "tiger", "lion", "goat", "elephant", "bear", "dog", "lion", "tiger"]))