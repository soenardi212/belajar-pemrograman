var nilai = parseInt(prompt('masukan nilai anda'));
if(nilai % 2 == 0){
  alert('yg anda masukan adalah bilangan "GENAP"')
} else if(nilai % 2 == 1){
  alert('yg anda masukan adalah bilangan "GANJIL"')
} else{
  alert('yg anda masukan bukan angka')
}

/*var nilai = parseInt(prompt('masukan nilai anda'));
switch(nilai){
  case nilai % 2 == 1:
    alert('ganjil');
    break;
  case nilai % 2 == 0:
    alert('genap');
    break;
  default :
    alert('bukan angka');
    break;
}*/
