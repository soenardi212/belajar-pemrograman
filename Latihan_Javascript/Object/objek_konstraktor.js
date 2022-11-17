//cara membuat object
//object boleh berisi property & method
// 3.konstraktor dan prototype

      // ini cara pertama :
function Mahasiswa(nama,energi){
  //let mahasiswa = {}; ini deklarasi var
  this.nama = nama; 
  this.energi = energi;//ini properti
  
  this.makan = function(porsi){
    this.energi += porsi; // ini method
    console.log(`halo ${this.nama} selamat makan`);
  }
  this.main = function(jam){
    this.energi -= jam;
    console.log(`selamat bermain ${this.nama}`);
  }
}
let helmi = new Mahasiswa('helmi',20);
//helmi.makan(5)

/* bedanya konstraktor dgn function declaration adalah :
  konstraktor tdk membutuhkan deklarasi variabel dan return */
 
      
    // ini cara ke 2 dgn prototype :
/*function Mahasiswa(nama,energi){
  this.nama = nama; 
  this.energi = energi;//ini properti
  
  Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi; // ini method
    return `Halo ${this.nama} selamat makan`;
  }
  Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama} selamat bermain`;
  }
  Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama} selamat tidur`;
  }

}
let jaedun = new Mahasiswa('jaedun',20);*/


function a(){
  console.log('ini a');
  
  function b(){
    console.log('ini b');
    
    function c(){
      console.log('ini c');
    }
    c();
  }
  b();
}
a();
