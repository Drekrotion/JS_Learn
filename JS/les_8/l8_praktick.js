class User {
    constructor(name, age, sex, weight, height, profeshen, education, car) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
        this.profeshen = profeshen;
        this.education = education;
        this.car = car;

    }

    toString() {
        console.log(this);
    }

}


let Taras = new User('Taras', 28, 'man', 70, 180, 'Direktor', 'Ekonomist', true);
let Roman = new User('Roman', 23, 'man', 65, 181, 'Ekonomist', 'Ekonomist', false);
let Oksana = new User('Oksana', 25, 'woman', 48, 164, 'Buhgalter', 'Menedger', false);
let Dima = new User('Dima', 29, 'man', 92, 194, 'Programmer', 'Ingener', true);
let Solomia = new User('Solomia', 18, 'woman', 51, 174, 'Histori', 'Teacher', true);



let arr = [Taras, Roman, Oksana, Dima, Solomia];


let sortedArr = arr.sort((el1, el2) => {
   return el1.age - el2.age
});









