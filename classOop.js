class Enemy {
    constructor(name, speed, healthPoint, attackPoint) {
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = false;
    }

    attack() {
        console.log(` ${this.name} mulai serang.. `);
        console.log(` Selamat anda mendapatkan ${this.attackPoint} point `);
    }

    confused() {
        console.log(` waduh...musuh ${this.name} terlalu kuat... ${this.name ? "Hidup" : "Mati"}`);
        console.log(`yah, perfomar anda berkurang ${this.healthPoint} `);
    }
}

class Pocong extends Enemy {
    constructor(name, speed, healthPoint, attackPoint) {
        super(name, speed, healthPoint, attackPoint);
    }

    jump() {
      console.log(` ${this.name} melompat..  `);
      console.log(` Kecepatannya ${this.speed} `);
      console.log(` Performa berkurang ${this.healthPoint}  `);
      const valuePoint = this.attackPoint - 20;

        if(valuePoint < 0) {
        console.log("GAME OVER");
      }else {
        console.log("point anda sebesar :" + valuePoint);
      }
      
    }
    superJump() {
        console.log(`Wah, ${this.name} melompat lebih tinggi `);
        console.log(` Kecepatannya ${this.speed} `);
      console.log(` Performa berkurang ${this.healthPoint}  `);
      const valuePoint = this.attackPoint - 50;

        if(valuePoint < 0) {
        console.log("GAME OVER");
      }else {
        console.log("point anda sebesar :" + valuePoint);
      }
    }
}

class Zombie extends Enemy {
    constructor(name, speed, healthPoint, attackPoint) {
        super(name, speed, healthPoint, attackPoint);
    }

    walk() {
      console.log(` ${this.name} berjalan..  `);
      console.log(` Kecepatannya ${this.speed} `);
      console.log(` Performa berkurang ${this.healthPoint}  `);
      const valuePoint = this.attackPoint - 5;

        if(valuePoint < 0) {
        console.log("GAME OVER");
      }else {
        console.log("point anda sebesar :" + valuePoint);
      }
      
    }
    running() {
        console.log(`Wah, ${this.name} melompat lebih tinggi `);
        console.log(` Kecepatannya ${this.speed} `);
      console.log(` Performa berkurang ${this.healthPoint}  `);
      const valuePoint = this.attackPoint - 15;

        if(valuePoint < 0) {
        console.log("GAME OVER");
      }else {
        console.log("point anda sebesar :" + valuePoint);
      }
    }
}
//manggil Pocong
let newPocong = new Pocong("BebPocong", 20, 10, 0);
newPocong.superJump();

//manggil Zombie
let newZombie = new Zombie("BebZombie", 20, 50, 0);
newZombie.running();