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
// Yaitu seorang programmer yang mengatur dengan caranya agar dapat mengubah dan mengonversi tipe data

// Cara mengonversi number ke string 1
let num = 100     // mendeklarasi Variabel num bernilai 100 number

let string = String(num)    // Cara mengonversi number 100 menjadi string 
console.log(string, typeof string)  // Output: 100 string

// Cara mengonversi number ke string 2 
let num1 = 200

let string1 = num1.toString()
console.log(string1, typeof string1)