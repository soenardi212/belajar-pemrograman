// proyek_kalkulator
alert('Selamat Datang Bos Qu');
var nilai_1 = parseInt(prompt('\t\tMasukan nilai pertama anda'));
var nilai_2 = parseInt(prompt('\t\tMasukan nilai yg ke-2'));

var hasil1 = nilai_1 + nilai_2;
var hasil2 = nilai_1 * nilai_2;
var hasil3 = nilai_1 - nilai_2;
var hasil4 = nilai_1 / nilai_2;
             // penjumlahan
function penjumlahan(nilai_1,nilai_2){
  return hasil1;
}
document.getElementById('demo1')
.innerHTML=nilai_1+' + '+nilai_2+' adalah '+hasil1;
              // perkalian
function perkalian(nilai_1,nilai_2){
  /*var hasil2 = nilai_1 * nilai_2;*/
  return hasil2;
}
document.getElementById('demo2')
.innerHTML=nilai_1+' x '+nilai_2+' adalah '+hasil2;
              // pengurangan
function pengurangan(nilai_1,nilai_2){
  return hasil3;
}
document.getElementById('demo3')
.innerHTML=nilai_1+' - '+nilai_2+' adalah '+hasil3;
              // pembagian
function pembagian(nilai_1,nilai_2){
  return hasil4;
}
document.getElementById('demo4')
.innerHTML=nilai_1+' : '+nilai_2+' adalah '+hasil4;
