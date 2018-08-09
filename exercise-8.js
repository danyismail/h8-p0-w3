function pasanganTerbesar(num) {
    var str = num.toString().split('')
    //return str
    var limit = str.length
    //return limit
    var arrAdd = []
    for(i=0; i<limit-1; i++){
        var join = str[i] + str[i+1]
        arrAdd.push(join)
    }
    return arrAdd.sort(function(a, b){return b - a})[0]; //sortir dari yg paling besar , ambil indeks pertama
}
  
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99