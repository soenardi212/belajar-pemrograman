// this adalah keyword spesial yg secara otomatis didefinisikan pd setiap function

//console.log(this);

//membuat objek dgn function declaration.
/*function halo(){
  console.log('Good Morning');
}
halo();*/
//di sini , this mengembalikan object atau scoope global
// dan di sini , this = windows


//membuat objek dgn cara literal.
/*var obj = {};
obj.halo = function(){
  console.log('Good Afternoon');
}
obj.halo();*/
//di sini , this mengembalikan object yg bersangkutan


//membuat obj dgn constructor & kita membutuhkan keyword NEW
function Halo() {
  console.log('Good Night');
}
new Halo();
//di sini , this mengembalikan object yg baru di buat
