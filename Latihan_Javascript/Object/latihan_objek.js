// Latihan object menggunakan function cunstraktor
// khusus function cunstraktor , nama awal harus diawali huruf BESAR

function Angkot(sopir,trayek,penumpang,kas){
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
  this.penumpangNaik = function(namaPenumpang){
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }
}
var angkot1 = new Angkot('helmi',['cicahem','cibiru'],[],0);

var angkot2 = new Angkot('jhon doe',['tamkot','asem'],[],0);
