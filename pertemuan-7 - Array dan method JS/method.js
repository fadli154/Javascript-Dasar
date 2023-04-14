// deklarasi array
let arr = ["fadli", "yudis", "fauzi"];

// console.log(arr);
// dikarenakan tipe array adalah object, maka hasilnya akan menjadi object
// nah banyak method yang di miliki JS untuk array ini

// 1. Join (Mengubah Array yang awalnya object kita bisa menampilkan sebagai string)
// console.log(arr.join("-")); outputnya : fadli-yudis-fauzi

// 2. Push (Mengisi array dari index paling belakang)
// console.log(arr.push("kocak")); output : 4
// console.log(arr.join("-")); output : fadli-yudis-fauzi-kocak

// 3. pop (menghapus array dari index paling belakang dan akan benar2 hilang)
// console.log(arr.pop()); output : fauzi karena yang dihapus adalah yang paling belakang
// console.log(arr.join("-")); outpu : fadli-yudis

// 4. unshift (Menambahkan array dari index paling pertama atau dari 0)
// console.log(arr.unshift("kocak")); output : 4
// console.log(arr.join("-")); output : kocak - fadli - yudis - fauzi;

// 5. shift (menghapus array dari index 0)
// console.log(arr.shift()); output : fadli karena ini index yang awal dan akan di hapus
// console.log(arr.join("-")); output : yudis - fauzi;

// 6. splice (index awal, Index yang ingin di hapus, ingin menambahkan apa)
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb'); Inserts at index 1
// console.log(months); output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May'); Replaces 1 element at index 4
// console.log(months); Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// 7. slice (memotong)
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// 8. map mencari value di array
// const array1 = [1, 4, 9, 16];

// Pass a function to map dan akan menghasilkan array baru
// const map1 = array1.map(function (x) {
//   return x * 2;
// });

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// 9. forEach
// const array1 = ["a", "b", "c"];

// array1.forEach(function (element) {
//   return console.log(element);
// });

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// 10. filter
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// menghasilkan array baru
// const result = words.filter((word) => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// 11. find (beda dengan filter, find hanya menghasilkan 1 output karena tidak akan menjadi array yg baru)
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);
// Expected output: 12
