// TIPE DATA PRIMITIVE

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
// Tipe data null adalah tipe data yang variabelnya bernilai kosong

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
// Tipe data object harus menggunakan kurung kurawal {}
// Tipe data object harus menggunakan syntax ( KEY & VALUE ) 
const orang = {
    nama: "Ranggo",
    umur: 27,
    negara: "Indonesia",
}

console.log(orang, typeof orang)

// Tipe Data ARRAY 
// Tipe data array harus menggunakan kurung siku [], dan untuk memisahkan data value ( nilainya ) harus menggunakan , 
const hobby = ["Basket", "Catur", "1", "satu1"]

console.log(hobby, typeof hobby)


// Tipe Data FUNCTION
// {} Untuk mengeksekusi code yg menggunakan function
// Tips cara memanggil function harus lengkap nama variabel dan () 
function sayHello(){
    return "Hello from kenapa coding"
}

console.log(sayHello(), typeof sayHello())



/* PERBEDAAN TIPE DATA PRIMITIVE & TIPE DATA REFERENCE */

// Tipe Data Primitive
let a = 10 
let b = a  // 'b' karena menyimpan nilai salinan dari a, Tipe data primitive menyimpan nilai nya di stack, jadi variabel b hanya menyimpan salinan nilai dari variabel a, 

a = 20

console.log(b)


// Tipe Data Reference
// Tipe data reference mynimpan referensi nya tidak menyimpan nilai nya, dan tipe data reference menyimpan data di heet memory 
let obj1 = {nama: "ranggo"}
let obj2 = obj1 // obj2 tidak menyimpan salinan nilai dari obj1, melainkan obj2 menyimpan referensi nilai dari obj1

obj1.nama = "Budiman" // Cara mengubah nilai dari obj1 dengan menyertakan key (nama) dan isi value dengan tanda kutip ("budiman").

console.log(obj1)