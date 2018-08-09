function mengelompokkanAngka(arr) {
    var limit = arr.length
    var arrGenap = []
    var arrGanjil = []
    var arrK3 = []
    var arrHasil = []
    for(var i=0; i<limit; i++){
        if(arr[i] % 2 === 0 && arr[i] % 3 === 0 || arr[i] % 2 !== 0 && arr[i] % 3 === 0 ){
            arrK3.push(arr[i])
        } else if(arr[i] % 2 !== 0){
            arrGanjil.push(arr[i])
        } else if(arr[i] % 2 === 0){
            arrGenap.push(arr[i])
        }
    }
arrHasil.push(arrGenap,arrGanjil,arrK3) 
return arrHasil
    
}
  
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]