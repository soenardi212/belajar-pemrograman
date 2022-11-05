// method filter & find

// 2 method ini di gunakan utk mencari elemen pd array

// filter bisa mengembalikan banyak nilai

// find hanya mengembalikan 1 nilai

var angka = [1,9,2,8,3,7,4,6];
var angka2 = angka.filter(function(e){
 // return e == 5;
    return e > 5;
});
/*angka2.sort();*/
console.log(angka2.join(' || '));
