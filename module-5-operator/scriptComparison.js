/* OPERATOR COMPARISON */
// OPERATOR COMPARISON berlaku dan digunakan pada console.log

// == ( Mengecek atau membandingkan persamaan nilai )
let a = "5"     // String "5"
let b = 5       // Number 5 

console.log(a == b) // Output: True ( Boolean ), Karna Value ( nilai ) dari kedua variabel a & b itu sama.
/* Operator Comparison == adalah operator yang digunakan untuk membandingkan dua nilai atau ekspresi untuk menentukan apakah mereka sama. Jika kedua nilai yang dibandingkan memiliki nilai yang sama, maka hasil dari operasi ini adalah TRUE. Jika tidak, hasilnya adalah FALSE.*/
/* Operator == biasanya bekerja dengan membandingkan nilai dari kedua operand tanpa memperhatikan tipe data.*/

// === ( Mengecek atau membandingkan persamaan nilai dan tipe data )
let c = "10"    // String "10"
let d = 10      // Number 10

console.log(c === d) // Output: False ( Boolean ), Karna tipe data dari value ( nilai ) dari kedua variabel berbeda.
/* Operator === dalam javaScript dikenal sebagai STRICT EQUALITY OPERATOR ini membandingkan nilai dan tipe data dari dua operand, dan hanya akan mengembalikan TRUE jika kedua operand ( variabel ) memiliki nilai yang sama dan tipe data yang sama. Jika ada perbedaan dalam tipe data atau nilai, maka hasilnya adalah FALSE. */

// != ( Operator Loose Inequality ) ( Mengecek ketidak samaan variabel )
let e = "20"    // String "20"
let f = 20      // Number 20

console.log(e != f) // Output: false, karna value ( nilai ) nya sama. Sedangkan operator ini hanya diperuntukan untuk mengecek ketidak samaan nilai atau variabel.
/* Operator != adalah operator perbandingan yang digunakan untuk memeriksa apakah dua nilai tidak sama. Jika nilai di sebelah kiri  tidak sama dengan nilai yang di sebelah kanan, maka hasil dari operasi ini adalah TRUE. Jika nilainya sama, maka hasilnya FALSE.*/
/* Namun perlu diperhatikan bahwa != melakukan PERBANDINGAN TANPA MEMPERTIMBANGKAN TIPE DATA. Artinya, jika kamu membandingkan angka dengan string yang memiliki nilai angka yang sama, hasilnya akan FALSE.*/

// !== ( Operator Strict Inequality ) ( Mengecek atau membandingkan ketidaksamaan nilai dan tipe data variabel )
let g = "5"     // String "5"
let h = false   // Boolean 

console.log(g !== h) // Output: true, karna oeprator !== diperuntukkanuntuk mengecek atau membandingkan ketidaksamaan nilai dan tipe data variabel.
/* Membandingkan NILAI & TIPE DATA */
/* Jika tipe data berbeda, perbandingan akan langsung menghasilkan TRUE tanpa konversi */

/* Jika ingin menghindari hasil yang tidak terduga akibat konversi otomatis JavaScript, lebih baik gunakan !== dibanfingkan !=. Dengan begitu, kamu bisa memastikan bahwa kedua nilai benar - benar berbeda baik dari sisi nilai maupun tipe data. */

