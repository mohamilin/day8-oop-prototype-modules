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

String.prototype.isPrime = function() {
    let nums = this.Math.sqrt();
    for (let i = 2; i <= nums; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return ` Nilai anda : ${num > 1}`;
}

console.log("5".isPrime());

Number.prototype.isPrime = function() {
    for(let i = 2; i<= Math.sqrt(); i++) {
        if(this % i === 0) {
            return false
        }
    }
    return this > 1;
}

console.log("7".isPrime());

// 

Number.prototype.isPrima = function() {

    const num = () => {
        let nums = this.Math.sqrt();
    for (let i = 2; i <= nums; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return ` Nilai anda : ${num > 1}`;
    }

    return this.num();
}

console.log("5".isPrima());



function isPrime(num) {
    let nums = Math.sqrt(num);
    for (let i = 2; i <= nums; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return ` Nilai anda : ${num > 1}`;
}

console.log(isPrime(2));