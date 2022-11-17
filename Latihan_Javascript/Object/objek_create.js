//cara membuat objek
// 4.objek create
const methodMahasiswa = {
makan : function(porsi) {
  this.energi += porsi; // ini method
  console.log(`halo ${this.nama} selamat makan`);
  },
main : function(jam) {
  this.energi -= jam;
  console.log(`halo ${this.nama} selamat bermain`);
  },
tidur : function(jam){
  this.energi += jam * 2;
  console.log(`halo ${this.nama} selamat tidur`);
}
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);//ini cara menghubungkan ke objek lain
  mahasiswa.nama = nama; //ini property
  mahasiswa.energi = energi;
  
  return mahasiswa;
}
let helmi = Mahasiswa('helmi', 20);
let dedi = Mahasiswa('dedi', 30);
