let main = confirm("Halo... Apakah Anda ingin bermain Suwit Jawa ?");

while (main == true) {
  // Mendapatkan inputan Players
  let player = prompt("Masukkan pilihan : (gajah/semut/orang)");

  player = player.toLowerCase();

  if (player == "gajah" || player == "semut" || player == "orang") {
    // Mendapatkan inputan computer
    let computer = Math.random();
    if (computer >= 0.6) {
      computer = "gajah";
    } else if (computer <= 0.64 && computer >= 0.34) {
      computer = "semut";
    } else {
      computer = "orang";
    }

    // rules
    if (player === computer) {
      hasil = "Kamu Seri";
    } else if (player === "gajah") {
      hasil = computer == "semut" ? "Kamu Kalah" : "Kamu Menang";
    } else if (player === "semut") {
      hasil = computer == "gajah" ? "Kamu Menang" : "Kamu Kalah";
    } else if (player === "orang") {
      hasil = computer == "gajah" ? "Kamu Kalah" : "Kamu Menang";
    }

    // menampilkan hasil dari suwit
    alert("Komputer Memilih : " + computer + "\ndan Kamu Memilih : " + player + "\n" + hasil);

    main = confirm("Apakah Anda ingin bermain lagi ? ");
  } else {
    alert("Anda tidak memasukan gajah/semut/orang");
    main = confirm("Tolong inputkan ulang !! ");
  }
}

alert("Baiklah Terimakasih");
