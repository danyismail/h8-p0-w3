var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,1 , 'Roman Alamsyah ElSharawi')
    input.splice(2,1 , 'Provinsi Bandar Lampung')
    input.splice(4,1 , 'Pria','SMA International Metro')

    getDate = input[3].split('/')   //split garis miring 
    var test = getDate.length 
    var convertNum = [] //buat array kosong untuk menampung hasil konversi data dari string ke number
    for(i=0; i<test; i++){
        var number = Number(getDate[i]) // merubah string jadi number
        convertNum.push(number) //setelah tipe nya number di masukan lagi ke dalam array
    }
    
    var month = convertNum[1]
    switch (month)  {
        case 01:
            month = 'Januari'
            break;
        case 02:
            month ='Februari'
            break;
        case 03:
            month ='Maret'
            break;
        case 04:
            bulan ='April'
            break;
        case 05:
            month ='Mei'
            break;
        case 06:
            month ='Juni'
            break;
        case 07:
            month ='Juli'
            break;
        case 08:
            month ='Agustus'
            break;
        case 09:
            month ='September'
            break;
        case 10:
            month ='Oktober'
            break;
        case 11:
            month ='November'
            break;
        case 12:
            month ='Desember'
            break;
     }
    
    console.log(input) // output 1 merubah isi array dengan splice done
    console.log(month) //output 2 kondisi bulan berdasarkan angka 1-12
    console.log(convertNum.sort())//output 3 ,data array tipe number done
    console.log(getDate.join('-'))//output 4 ,tanggal dengan pemisah -
    console.log(input[1].slice(0,14))//output 5 , batasi nama 15 karakter
}

dataHandling2(input)


