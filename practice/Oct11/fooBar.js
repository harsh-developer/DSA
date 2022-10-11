// take a number and if number is multiple of 3 print "Foo"
// If number is multiple of 5 print "Bar"
// If number is multiple of both 3 and 5 print "FooBar"
// If not multiple of either, print "nothing"

function fooBar(num){
    let result = ""
    if(num%3 == 0){
        result += "Foo"
    }
    if(num%5 == 0){
        result += "Baar"
    }
    return result
}
console.log(fooBar(15))