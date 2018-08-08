

function palindrome(kata) {
var getLength = kata.length
var print = ''
for(i=getLength-1; i>=0; i--){
    print = print + kata[i]
}
if(print === kata){
    return true
} else {
    return false
}
}


console.log(palindrome('katak'))