/*contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
*/
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(){
limit = input.length //4
for(i=0; i<limit; i++){
    
console.log('Nomor ID:',input[i][0]) //0,0 - 1,0 - 2,0 - 3,0 - 4,0
console.log('Nama Lengkap: ',input[i][1]) 
console.log('TTL:  ',input[i][2] + ' ' +input[i][3]) 
console.log('Hobi: ',input[i][4])
console.log('\n')
}

} 
dataHandling()
