const satu = 'Hello World';
const dua = 'Selamat Datang';
export {satu,dua};

//export default
export default function(a,b) {
  return a + b;
}//keyword default hanya bisa kita pakai 1x , dan function ini boleh kita kasih nama bebas di file import
export function pengurangan(y,z) {
  return y-z;
}
