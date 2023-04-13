let main = confirm("Apakah anda ingin bermain Tebak Angka dari 1-10");

let kesempatanPlayer = 3;

while (main) {
  alert("Anda memiliki 3 Kesempatan");
  // mengambil angka random dari 1-10 untuk tebakan benar
  let tebakanBenar = Math.floor(Math.random() * 10) + 1;
  console.log(tebakanBenar);
  if (kesempatanPlayer >= 0) {
    for (let kesempatanPlayer = 2; kesempatanPlayer >= 0; kesempatanPlayer--) {
      let player = parseInt(prompt("Masukkan Tebakan Angka 1-10 : "));
      if (tebakanBenar === player) {
        hasil = "Angka Tebakan Benar";
        main = false;
        kesempatanPlayer = 0;
      } else if (player < tebakanBenar) {
        hasil = "Angka Tebakan Terlalu Rendah";
      } else if (player > tebakanBenar) {
        hasil = "Angka Tebakan Terlalu Tinggi";
      }
      alert(hasil + "\nsisa kesempatan : " + kesempatanPlayer);
    }
  }

  main = confirm("Apakah ingin bermain lagi?");
}

alert("Terimakasih Telah Bermain");
