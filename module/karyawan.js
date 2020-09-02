export default class Karyawan {
    constructor(name, no_id, status, jabatan, age ) {
        this.name = name;
        this.no_id = no_id;
        this.status = status;
        this.jabatan = jabatan;
        this.age = age;
    }

    datang() {
        console.log(` Selamat Datang ${this.name} di kantor`);
    }

    izin() {
        console.log(`${this.name} ada keperluan selama 10 menit `);
    }

    pulangSakit() {
        console.log(` ${this.no_id} Silahkan pulang duluan, karena sakit `);
    }

}

// export {Karyawan}
// export default function () {Karyawan}