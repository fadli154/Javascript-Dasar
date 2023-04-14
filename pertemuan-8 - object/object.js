// membuat object

// var obj = {};

// 1. contoh object literal
var siswa = {
  nama: "fadli hifziansyah",
  kelas: "XI RPL",
  absen: 7,
};

// 2. contoh function declaration
var siswa1 = function (nama, kelas, absen) {
  var siswa1 = {};
  siswa1.nama = nama;
  siswa1.kelas = kelas;
  siswa1.absen = absen;
  return siswa1;
};

// console.log(siswa1("fadi", "xi rpl", 7));

function buatObjectSiswa(nama, kelas, absen) {
  var siswa1 = {};
  siswa1.nama = nama;
  siswa1.kelas = kelas;
  siswa1.absen = absen;
  return siswa1;
}

// console.log(buatObjectSiswa("fadli hifziansyah", "XI RPL", 7));

// 3. contoh constructor

function Siswa(nama, kelas, absen) {
  // var this = {};
  this.nama = nama;
  this.kelas = kelas;
  this.absen = absen;
  // return this;
}

// untuk memanggilnya menggunakan kata kunci new
var siswaConstructor = new Siswa("Fadli Hifziansyah", "XI RPL", 7);
