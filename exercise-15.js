
function groupAnimals(animals) {
  var group = [animals[0][0]]
  var result = []
  for (var i = 0; i < animals.length; i++) {
    var tmp = 0
    for(var j = 0; j<group.length; j++){
      if (animals[i][0] ===  animals[j][0]){
        tmp += 1
        
      }
    }
    if(tmp === 0){
      group.push(animals[i][0])
    }
  }   
  for(var k = 0; k<group.length; k++){
    result.push([])
    for(var l=0; l<animals.length; l++){
      if(animals[l][0] === group[k]){
        result[k].push(animals[l])
      }
    }
  }
  return result.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]