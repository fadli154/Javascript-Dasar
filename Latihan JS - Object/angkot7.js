// membuat Object Angkot
function Angkot(namaSopir, trayek, kas, penumpang) {
  this.namaSopir = namaSopir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log(namaPenumpang + " tidak ada di angkot ini");
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (namaPenumpang == this.penumpang[i]) {
          penumpang[i] = undefined;
          this.kas += bayar;
          return this.penumpang;
        }
      }
    }
  };
}

const angkot1 = new Angkot("Fadli Hifziansyah", ["tangerang", "bandung"], 0, []);
