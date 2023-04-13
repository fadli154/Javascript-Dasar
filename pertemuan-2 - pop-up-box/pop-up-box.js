// Alert memberikan pesan sederhana
alert("Halo bang");

// Prompt memiliki input
let nama = prompt("Masukkan nama : ");
alert(nama);

// confirm meminta konfirmasi yes dan no / true and false
let confirm = confirm("Apakah kamu yakin ?");

if (confirm === true) {
  alert("kamu menekan tombol ok!!");
} else {
  alert("Kamu menekan tombol cancel");
}
