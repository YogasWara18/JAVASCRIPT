// TIPE DATA PRIMITIF

// Tipe Data STRING 
const nama = 'Ranggo'
const negara = "Indonesia"
const domisili = `${nama} Bandung` // ${nama} Cara untuk mengambil variabel tertentu.

console.log(nama,typeof nama) // 'typeof' berguna untuk mengecek tipe data

// Tipe Data NUMBER 
const umur = 26
// const umur = 26.5 tipe data FLOAT NUMBER

console.log(umur,typeof umur)

// Tipe Data BOOLEAN 
const isMarried = true 
const notMarried = false 

console.log(isMarried, typeof isMarried)
console.log(notMarried, typeof notMarried)

// Undefined
// Untuk undefined tidak bisa menggunakan CONST karna nilai variabel tidak dapat di ganti atau konstanta, hanya bisa menggunakan let atau var
let x;   // variabel x undefined karna belum di defenisikan.

x = 'ranggo'  // Cara mendefenisikan variabel yg undefined

console.log(x, typeof x)

// Tipe Data NULL 
const person = null 

console.log(person, typeof person)
// Tipe data null adalah tipe data yang bernilai kosong

// Tipe Data SYMBOL
const symbol1 = Symbol("description 1")

console.log(symbol1, typeof symbol1)
// Tipe data symbol jarang dipakai, tipe data ini unik dan sering digunakan untuk tipe data object.

// Tipe Data bigInt
const bigInt = 123287763982349829498234n

console.log(bigInt, typeof bigInt)
// Tipe data bigInt digunakan untuk membuat perhitungan angka yang besar.



// TIPE DATA REFERENCE


// Tipe Data OBJECT 
