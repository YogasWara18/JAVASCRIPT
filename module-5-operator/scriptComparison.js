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
let g = "5"  // String "5"
let h = false   // Boolean false

console.log(g !== h) // Output: true, karna oeprator !== diperuntukkanuntuk mengecek atau membandingkan ketidaksamaan nilai dan tipe data variabel.
/* Membandingkan NILAI & TIPE DATA */
/* Jika tipe data berbeda, perbandingan akan langsung menghasilkan TRUE tanpa konversi */

/* Jika ingin menghindari hasil yang tidak terduga akibat konversi otomatis JavaScript, lebih baik gunakan !== dibanfingkan !=. Dengan begitu, kamu bisa memastikan bahwa kedua nilai benar - benar berbeda baik dari sisi nilai maupun tipe data. */

// > ( Mengecek apakah variabel satu lebih besar dari variabel lainnya )
let i ="17"     // String "17"
let j = 16      // Number 16

console.log(i > j)     // Output: True, Karna nilai i string berubah menjadi number 17, dan nilai i lebih besar dari nilai j maka hasilnya True.
/* Operator > digunakan untuk mebandingkan dua nilai dan menentukan apakah nilai di sebelah kiri lebih besar daripada nilai di sebelah kanan.*/
/* Jika nilai kiri lebih besar, hasilnya True; jika tidak hasilnya False.*/

// >= ( Mengecek apakah variabel satu lebih besar atau sama dari variabel lainnya )
// Jika value ( nilai ) dari variabel lebih besar atau sama dengan maka hasilny TRUE, dan jika value ( nilai ) dari variabel lebih kecil maka hasilnya FALSE.
let k = 3 
let l = 3

console.log(k >= l) // Output: TRUE, karna Kedua value ( nilai ) dari varibel sama.

// < ( Mengecek apakah variabel satu lebih kecil dari variabel lainnya )
let m = 2
let n = 3

console.log(m < n) // Output: TRUE, karna nilai dari varibael m lebih kecil dari nilai varibel n, karna operator ini digunakan untuk meghitung bilangan yang lebih kecil.

// <= ( Mengecek apakah variabel satu lebih kecil atau sama dengan degnan variabel lainnya )
// jika value ( nilai ) dari variabel lebih kecil atau sama dengan akan bernilai TRUE, dan jika nilai dari variabel lebih besar dari variabel lainnnya maka hasilnya FALSE.
let o = 4
let p = 3

console.log(o <= p) // Output: FALSE, Karna nilai daari varibael o lebih besar dari nilai variabel p, Operator inti digunakan untuk menghitung siapa yg lebih kecil atau sama dengan.

