// Method pd array
// splice artinya menyambung di tengah"
// rumusnya = splice(index awal,mauDiHapusBerapa,elemenBaru 1,elemenBaru 2,dst..)
var acc = ['helmi','dedi','umar','sunardi','baplang'];
acc.splice(1,2,'a','b','c','d','e');
console.log(acc.join('-'));

let newAcc = acc.splice(1,3);
console.log(newAcc);//a,b,c

//splice()tidak hanya memodifikasi array yang dipanggil, tetapi juga mengembalikan array baru yang berisi nilai elemen yang dihapus:
let my_arr = ['kosong','satu','dua','tiga'];
let newArr = my_arr.splice(0,2);
console.log(newArr);//kosong,satu

const satu = ['Hari','minggu'];
satu.splice(1,0,'ini','adalah','hari');
console.log(satu);

// slice artinya mengiris sebuah array , menjadi array yg baru 
// rumusnya = slice(awal,akhir)
var arr = ['helmi','dedi','umar','sunardi','baplang'];
var arr2 = arr.slice(1,3);
console.log(arr2.join('-'));
//par pertama menghitung dr indeks
//par ke-2 menghitung dr elemen
//arr2 telah menjadi array baru