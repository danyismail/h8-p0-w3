
// X - 0 1 2 3 4 contoh
// 0 - * 2 3 4 5 = 120
// 1 - 1 * 3 4 5 =  60
// 2 - 1 2 * 4 5 =  40
// 3 - 1 2 3 * 5 =  30
// 4 - 1 2 3 4 * =  24

function perkalianUnik(arr) {
    var grab = []
    
    for(var i=0; i<arr.length; i++){
        var tmp = 1
        for(var j=0; j<arr.length; j++){
            if(i !== j)
            tmp *= arr[j]
            
        }
        grab.push(tmp)   
    }
    
    return grab
}
    
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]