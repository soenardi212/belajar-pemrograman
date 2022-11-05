// latihan array

var arr = ['hari','ini'];
arr.push('saya','sedang','berada','di','kp.halaman');
console.log(arr.join(' > '));

var abb = ['helmi','sunardi'];
abb.unshift('nama','saya','adalah');
console.log(abb.join(' = '));

var acc = ['mangga','jeruk','apel'];
acc.pop();
console.log(acc.join('_'));

var add = ['hai','hello','world'];
add.shift();
console.log(add.join(' = = = '));

var aff = [];
aff[0] = 'jaedun';
aff[1] = 'umar';
aff[2] = 'bakrun';
console.log(aff);

var mhs = ['helmi','dedi','umar','sunardi','baplang'];
for(var i = 1; i < mhs.length; i++){
  console.log('daftar nama siswa ke-'+i+' '+mhs[i]);
}
