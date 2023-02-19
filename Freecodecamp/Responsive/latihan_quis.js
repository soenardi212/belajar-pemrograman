let x = 0;
const benar = 'Jawaban Anda Benar';
const salah = 'Jawaban Anda Salah';
const soal = 'Soal No.';

const z = alert('Hello selamat datang di program awal js qu');
const nama = prompt('Masukkan nama anda');
const nama1 = alert(`Baik ${nama}, \nMari kita mulai programnya..!!!\nSelamat mengerjakan ^_^`);

let a = prompt(`${soal}1 \nNegara yg memiliki bentuk compact adalah...\nA.Laos\t\t\t\t\t\tB.Kamboja\nC.Vietnam\t\t\t\tD.Indonesia`);
switch (a) {
  case 'B':
  case 'b':
    alert(`${benar}`);
    document.getElementById('satu').innerHTML = (`${soal}1 ${benar}`);
    x += 10;
    break;
  default:
    alert(`${salah}`);
    document.getElementById('satu').innerHTML = (`${soal}1 ${salah}`);
    //x -= 20;
    break;
  }
  let b = prompt(`${soal}2 \nBrunei darussalam terletak pada 4 0 LU - 6 0 LU dan 114 0 BT - 115 0 BT. Berdasarkan letak astronomis tersebut, maka brunei darussalama memiliki iklim...\nA.Kutub\t\t\t\t\tB.Subtropis\nC.Tropis\t\t\t\t\tD.Sedang`);
  switch (b) {
    case 'C':
    case 'c':
      alert(`${benar}`);
      document.getElementById('dua').innerHTML = (`${soal}2 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('dua').innerHTML = (`${soal}2 ${salah}`);
      //x -= 20;
      break;
  }
  let c = prompt(`${soal}3 \nNegara dengan sistem pendidikan terbaik dunia di asia tenggara adalah...\nA.Indonesia\t\t\t\t\t\tB.Thailand\nC.Singapura\t\t\t\t\tD.Malaysia`);
  switch (c) {
    case 'C':
    case 'c':
      alert(`${benar}`);
      document.getElementById('tiga').innerHTML = (`${soal}3 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('tiga').innerHTML = (`${soal}3 ${salah}`);
      //x -= 20;
      break;
  }
  let d = prompt(`${soal}4 \nOrganisasi kerja sama ekonomi di wilayah asia tenggara adalah...\nA.ASEAN\t\t\t\t\tB.OPEC\nC.APEC\t\t\t\t\t\tD.AFTA`);
  switch (d) {
    case 'D':
    case 'd':
      alert(`${benar}`);
      document.getElementById('empat').innerHTML = (`${soal}4 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('empat').innerHTML = (`${soal}4 ${salah}`);
      //x -= 20;
      break;
  }
  let e = prompt(`${soal}5 \nPenyelenggaraan pesta olahraga setiap dua tahun sekali melalui SEA (southeast asia) games merupakan bentuk kerja sama antarruang ASEAN di bidang...\nA.Politik\t\t\t\t\t\t\tB.Sosial budaya\nC.Ekonomi\t\t\t\t\tD.Keamanan`);
  switch (e) {
    case 'B':
    case 'b':
      alert(`${benar}`);
      document.getElementById('lima').innerHTML = (`${soal}5 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('lima').innerHTML = (`${soal}5 ${salah}`);
      //x -= 20;
      break;
  }
  let f = prompt(`${soal}6 \nApa itu singkatan dari ASEAN...?\nA.Association of Soul Earth Asian Nations\nB.Association of South East Asian Nations\nC.Association of Small East Asian Nations\nD.Association of Stone East Asian Nations`);
  switch (f) {
    case 'B':
    case 'b':
      alert(`${benar}`);
      document.getElementById('enam').innerHTML = (`${soal}6 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('enam').innerHTML = (`${soal}6 ${salah}`);
      //x -= 20;
      break;
  }
  let g = prompt(`${soal}7 \nJumlah negara ASEAN pertama kali adalah...\nA.4\t\t\t\tB.5\t\t\t\tC.6\t\t\t\tD.7`);
  switch (g) {
    case 'B':
    case 'b':
      alert(`${benar}`);
      document.getElementById('tujuh').innerHTML = (`${soal}7 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('tujuh').innerHTML = (`${soal}7 ${salah}`);
      //x -= 20;
      break;
  }
  let h = prompt(`${soal}8 \nKapan ASEAN didirikan...?\nA.18 Agustus 1945\t\t\t\tB.17 Agustus 1967\nC.8 Agustus 1968\t\t\t\t\tD.8 Agustus 1967`);
  switch (h) {
    case 'D':
    case 'd':
      alert(`${benar}`);
      document.getElementById('delapan').innerHTML = (`${soal}8 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('delapan').innerHTML = (`${soal}8 ${salah}`);
      //x -= 20;
      break;
  }
  let i = prompt(`${soal}9 \nNegara pendiri ASEAN adalah, kecuali...\nA.Indonesia\t\t\t\t\tB.Singapura\nC.Mesir\t\t\t\t\t\t\tD.Thailand`);
  switch (i) {
    case 'C':
    case 'c':
      alert(`${benar}`);
      document.getElementById('sembilan').innerHTML = (`${soal}9 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('sembilan').innerHTML = (`${soal}9 ${salah}`);
      //x -= 20;
      break;
  }
  let j = prompt(`${soal}10 \nDeklarasi yang mengawali berdirinya kerja sama negara Asia Tenggara disebut dengan Deklarasi...\nA.Jakarta\t\t\t\t\t\t\t\t\tB.Bangkok\nC.Kuala Lumpur\t\t\t\t\tD.Manila`);
  switch (j) {
    case 'B':
    case 'b':
      alert(`${benar}`);
      document.getElementById('sepuluh').innerHTML = (`${soal}10 ${benar}`);
      x += 10;
      break;
    default:
      alert(`${salah}`);
      document.getElementById('sepuluh').innerHTML = (`${soal}10 ${salah}`);
      //x -= 20;
      break;
  }
  //console.log(a);
  document.getElementById('hasil').innerHTML = (`Selamat ${nama}, anda mendapatkan nilai ${x}`);
