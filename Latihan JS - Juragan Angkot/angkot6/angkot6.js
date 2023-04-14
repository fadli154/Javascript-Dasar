//membuat array penumpang
let penumpang = [];

console.log(penumpang.length);

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);

    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined || penumpang[i] == 0) {
        penumpang[i] = namaPenumpang;

        return penumpang;
      } else if (namaPenumpang == penumpang[i]) {
        console.log("penumpang sudah ada di dalam angkot");

        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);

        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot sedang kosong");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (namaPenumpang == penumpang[i]) {
        penumpang[i] = undefined;

        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di angkot");
        return penumpang;
      }
    }
  }
};
