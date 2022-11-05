/*/ 1.menambahkan isi array
var arr = [];
arr[0] = 'helmi';
arr[1] = 'sunardi';
arr[3] = 'jaedun';
console.table(arr);
//indeks no.2 akan di isi dgn undefined

// 2.menghapus isi array
var abb = ['Helmi','sunardi','umar','bakrun','jaedun','sulis','ade'];
abb[1] = undefined;
abb[4] = undefined;
//abb[4] = undefined;
console .table(abb);

// 3.menampilkan isi array , harus dgn loop agar tdk menjadi OBJECT
var acc = ['helmi','dedi','umar','sunardi','baplang'];
for(var i = 0; i < acc.length; i++){
 // document.writeln('mahasiswa ke-'+i+' = '+acc[i]+'<p>');
 document.writeln(`mahasiswa ke-`+i+' = ' + `${this.acc[i]}`+`<p>`);
}*/
// penghitungan indeks selalu di mulai dari = 0
//sedangkan penghitungan elemen di mulai dr = 1 


            // #.Method pd array
 //1.join = mengubah nilai array menjadi string
var acc = ['helmi','dedi','umar','sunardi','baplang'];
console.log(acc.join(' = '));
console.log(acc);
// 2.push = menambah array di akhir
var acc = ['helmi','dedi','umar','sunardi','baplang'];
acc.push('jaedun','bakrun');
console.log(acc.join(' - '));

// 3.pop = menghapus isi array yg terakhir
var acc = ['helmi','dedi','umar','sunardi','baplang'];
acc.pop();
acc.pop();
console.log(acc.join(' > '));

// 4.shift = menghapus data array di awal
var acc = ['helmi','dedi','umar','sunardi','baplang'];
acc.unshift('nama','saya');
console.log(acc.join('>'));

//sort = mengurutkan isi array
var angka = [1,3,6,2,9,-3,7,6,8,0];
angka.sort();
console.log(angka.join(' - '));



//join = mengubah data array menjadi string
//shift = menghapus data array yg di awal
// unshift = menambahkan data array di awal
// pop = menghapus data array yg akhir
// push = menambahkan data array di akhir
//length = menghitung jumlah data pd array
// sort = mengurutkan isi array
