// membuat objek :

// 1.objek literal
var mhs = {
  nama : 'helmi',
  umur : 27,
  ipk : [23.0 ,2.50 ,3.20],
  alamat : {
    jalan :'kp.salo,gg.musholah 2',
    kota : 'jakarta barat',
    provinsi : 'DKI Jakarta'
  }
};
//console.table(mhs);
var warga = {
  nama : 'Dedi',
  umur : 34,
  status : 'Menikah',
  alamat : 'kp.salo'
}

// 2.function declaration
function buatCthObjek(nama,umur,status,alamat){
  var siswa = {};//ini membuat objek kosong
  siswa.nama = nama;// dan ini
  siswa.umur = umur;//objek nya
  siswa.status = status;//kita
  siswa.alamat = alamat;//isi
  return siswa;
}
var siswa2 = buatCthObjek('dikoh',35,'sudah menikah','kaliwadas-bumiayu');

console.table(siswa2);
// 3.Constructor
function Siswa(nama,umur,status,alamat){
  this.nama = nama;
  this.umur = umur;
  this.status = status;
  this.alamat = alamat;
}
var siswa3 = new Siswa('erni',34,'sudah menikah','karet tensi');
//utk constructor kata kunci 'new' & 'this' wajib ada , jika tdk maka ini akan error
console.table(siswa3);
