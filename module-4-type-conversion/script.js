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

// (*)
let result3 = "5" * 10
console.log(result3, typeof result3)

