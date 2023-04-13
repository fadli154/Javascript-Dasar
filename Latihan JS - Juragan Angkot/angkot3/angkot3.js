noAngkot = 1;
angkotBeroprasi = 6;
jumlahAngkot = 10;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log(`Angkot No. ` + noAngkot + ` Beroprasi dengan baik`);
  } else {
    console.log(`Angkot No. ` + noAngkot + ` Sedang Tidak Beroprasi`);
  }
}
