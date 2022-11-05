// method forEach & map , yaitu utk melakukan looping pd array

// map selalu mengembalikan nilai array , sedangkan forEach tdk

var angka = [1,2,3,4,5,6,7,8];
var nama = ['helmi','sunardi','jaedun'];
var huruf = ['H','E','L','M','I'];
for(var i = 0; i < huruf.length; i++){
  console.log(huruf[i]);
}

 //jgn lupa , panggil dulu array nya
/*angka.forEach(function(e){
  console.log(e);
});
// e = elemen 
// i = indeks
nama.unshift('bakrun');
nama.forEach(function(e,i){
  console.log('Mahasiswa ke-'+(i+1)+' adalah '+(e));
});*/
var angka2 = angka.map(function(e){
  return e * 2;
});
//console.log(angka.join(' - '));
console.log(angka2.join(' - '));

var angka3 = angka.map(function
(e){
  return e + 5;
});
console.log(angka3);
