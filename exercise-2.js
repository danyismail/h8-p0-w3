var word = "hello world!"
var getLength = word.length
var print = ''
for(i=getLength-1; i>=0; i--){
    print = print + word[i]
}
console.log(print)

