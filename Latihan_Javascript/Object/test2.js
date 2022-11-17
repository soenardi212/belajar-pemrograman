var kucing = new Object();
kucing.nama = 'Komeng';
kucing.warna = 'kuning';
kucing.panjang = '30cm';

kucing.tampil = tampilkanObject;
//membuat function di dlm obj
function tampilkanObject() {
  document.writeln(`kucing ku bernama ${kucing.nama}<p>`);
  document.writeln(`dia berwarna ${kucing.warna}<p>`);
  document.writeln(`dan panjangnya ${kucing.panjang}<p><hr>`);
}

kucing.tampil();
kucing.nama = 'Inga';
kucing.warna = 'hitam'
kucing.tampil();
