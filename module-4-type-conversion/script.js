// IMPLICIT CONVERSION

// String Coercion (+)
// Jika ada operasi antara STRING dan tipe data lain, maka tipe data lain akan dikonversi menjadi string.
let result = "5" + 10 
console.log(result, typeof result) // Output : 510 string
// Di sini 10 dikonversi menjadi string "10" dan digabungkan dengan "5" maka menjadi 510 string 

// Number Coercion (-)
// JavaScript dapat mengubah BOOLEAN atau STRING menjadi NUMBER dalam operasi matematika :
let result2 = "5" - 10
console.log(result2, typeof result2) // Output : -5 number
// "5" dikonversi menjadi angka 5 (number), sehingga operasi pengurangan dapat dilakukan. dan menjadi hasil -5 number

// Boolean Coercion 
// Saat digunakan dlam kondisi logika, JavaScript dapat mengonversi nilai menjadi TRUE atau FALSE secara otomatis :
let bool1 = "Hello"
console.log(Boolean("Hello")); // Output : true
console.log(Boolean(0)); // Output : false




// EKSPLISIT CONVERSION 
// Yaitu seorang programmer yang mengatur dengan caranya agar dapat mengubah dan mengonversi tipe data dengan menggunakan syntax tersendiri.

// Cara mengonversi number ke string 1
let num = 100     // mendeklarasi Variabel num bernilai 100 number

let string = String(num)    // Cara mengonversi number 100 menjadi string 
console.log(string, typeof string)  // Output: 100 string

// Cara mengonversi number ke string 2 
let num1 = 200

let string1 = num1.toString()      // Cara mengubah number 200 menjadi string
console.log(string1, typeof string1) // Output: 200 string


// Cara mengonversi string menjadi number dengan parseInt()
// parseInt() untuk bilangan bulat, contoh = jika bilangannya 200.444 maka akan dibulatkan menjadi 200
let stringg = "100"

let num2 = parseInt(stringg)   // Cara mengubah string ke number dengan menggunakan varibael 'parseInt()' dan memasukkan variabel yg sudah bernilai kedalam kurung.
console.log(num2, typeof num2)  // Output = 100 number

// Cara mengonversi number bilangan berkoma dengan parseFloat()
// parseFloat() digunakan untuk bilangan berkoma, contoh = jika bilangannya 200.343 maka akan mengeluarkan hasil yg sama 200.343 karena parseFoat() digunakan untuk bilangan berkoma.
let stringgg = "200.343"

let num3 = parseFloat(stringgg) // Cara merubah string ke number dengan bilangan berkoma dengan menggunakna variabel 'parseFloat()' dan memasukkan variabel yang sudah bernilai kedalam kurung.
console.log(num3, typeof num3)  // Output: 200.343 number

// Cara mengonversi ke boolean 
let bool2 = Boolean("")   // ("") ini termasuk ke falsy atau false.

console.log(bool2, typeof bool2) // Output : False boolean

// kesalahan yang sering terjadi kita dapat NaN ( Not a Number )
// Contoh code hasil NaN
let result3 = "abc" - 10 

console.log(result3, typeof result3) // Output: NaN number 
// karena nilai dari result3 = "abc" atau string tidak bisa dikurangkan '-' dengan number 10

// Tetapi jika menggunakan tambah '+' maka string "abc" dan 10 akan digabungkan dang menghasilkan nilai abc10 string.
let result4 = "abc" + 10

console.log(result4, typeof result4) // Output: abc10 String