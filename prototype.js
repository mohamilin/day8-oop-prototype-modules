/*
Buatlah method pada string yang dapat mengembalikan nilai string itu sendiri dalam keadaan terbalik

Contoh:
thor -> roht
rusak -> kasur
*/
// function personal(name, city, words) {
//     this.name = name;
//     this.city = city;
//     this.words = words;

// }

String.prototype.balikKata = function () {
    return this.split('').reverse().join('');

}

console.log("thor".balikKata());
console.log("rusak".balikKata());


// 
/*
Buatlah method pada number bernama ‘isPrima()’ yang dapat mengembalikan
nilai boolean ‘true’ jika number tersebut merupakan bilangan prima
    Contoh:
    7.isPrima() -> true
    6.isPrima() -> false
*/


// 
Number.prototype.isPrime = function() {
    let nums = Math.sqrt(this);
    for (let i = 2; i <= nums; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return ` Nilai anda : ${this >= 2}`;
}

let angka = 10;
angka.isPrime();
