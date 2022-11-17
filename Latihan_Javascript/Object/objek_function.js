//cara membuat object
//object boleh berisi property & method
// 2.function declaration

        /*ini cara pertama
function Mahasiswa(nama,energi){
  let mahasiswa = {};
  mahasiswa.nama = nama; //ini property
  mahasiswa.energi = energi;
  
  mahasiswa.makan = function(porsi){
    this.energi += porsi; // ini method
    console.log(`halo ${this.nama} selamat makan`);
  }
  mahasiswa.main = function(jam){
    this.energi -= jam;
  }
  return mahasiswa;
}
let helmi = Mahasiswa('helmi',20);
let dedi = Mahasiswa('dedi',30);*/

            //ini cara ke-2
const methodMahasiswa = {
makan : function(porsi) {
  this.energi += porsi; // ini method
  console.log(`halo ${this.nama} selamat makan`);
  },
main : function(jam) {
  this.energi -= jam;
  console.log(`halo ${this.nama} selamat bermain`);
  }
};

function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama; //ini property
  mahasiswa.energi = energi;
  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;
  
  return mahasiswa;
}
let helmi = Mahasiswa('helmi', 20);
let dedi = Mahasiswa('dedi', 30);

