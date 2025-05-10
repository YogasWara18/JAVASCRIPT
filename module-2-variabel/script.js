// VARIABEL

// Coment single line : berguna untuk memberi komentar pada kode javaScript 

/* Comment multiple line : bisa digunakan dengan banyak line kode */


// VAR : hanya bisa diakses diluar scope 
if(true) {
    var nama = "ranggo"
} //scope

console.log('var',nama)


// Var juga bisa untuk mengubah value 'nilai' dari variabel nya, tanpa harus mendeklarasikan lari variabel var, bisa diakses diluar scope
if(true) {
    var nama = "ranggo"
} // scope
nama = "patto"
console.log('var :',nama)

// LET : Tidak bisa diakses diluar scope, hanya bisa diakses didalam scope :
if(true) {
    let nama = "Ranggo"
    console.log('let :',nama)
} //scope

// console.log('let : ', nama) // Tidak bisa diakses diluar scope 

// Let bisa mengubah value 'nilai' dari variabel : 
if(true) {
    let nama = "Ranggo"
    nama = "pato"
    console.log('let :',nama)
}

// COSNT : Tidak bisa diakses diluar scope, dan value 'nilai' tidak dapat dirubah atau nilainya tetap.
 if(true) {
    const nama = "Ranggo"
    console.log('const :',nama)
 } // scope

// console.log('const :', nama) COSNT : Tidak bisa diakses diluar scope  