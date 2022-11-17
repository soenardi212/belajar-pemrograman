//latihan membuat object
//object boleh berisi method & properti
// 1.object literal
// problem = tdk efektif utk membuat object yg banyak

let mahasiswa1 = {
  nama : 'helmi',
  energi : 10,
  makan : function(porsi){
    this.energi = this.energi + porsi;
    console.log(`halo ${this.nama} selamat makan`);
  }
}
//cth cara panggil di console , mahasiswa1.makan(2);

let mahasiswa2 = {
  nama: 'dedi',
  energi: 20,
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`halo ${this.nama} selamat makan`);
  }
}

