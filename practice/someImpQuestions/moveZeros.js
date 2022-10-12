let arr = [0,1,0,3,12]

for(let i = 0; i< arr.length; i++){
    if(arr[i] == 0){
        arr.splice(i);
        arr.push(arr[i])
    }
}
console.log(arr);