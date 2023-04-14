function jumlahVolumeDuaKubus(kubus1, kubus2) {
  volumeKubus1 = kubus1 * kubus1 * kubus1;
  volumeKubus2 = kubus2 * kubus2 * kubus2;

  return volumeKubus1 + volumeKubus2;
}

console.log(jumlahVolumeDuaKubus(8, 3));
