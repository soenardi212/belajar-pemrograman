//function expretion
var duaKubus = function(a,b){
  kubus1 = a*a*a;
  kubus2 = b*b*b;
  penjumlahan = kubus1+kubus2;
 return penjumlahan;
}
console.log(duaKubus(8,3));

//function declaration
function tigaKubus(a,b,c){
  var kubus1 = a*a*a;
  var kubus2 = b*b*b;
  var kubus3 = c*c*c;
  var total = kubus1 + kubus2 + kubus3;
  return total;
}
console.log(tigaKubus(12,7,9));
