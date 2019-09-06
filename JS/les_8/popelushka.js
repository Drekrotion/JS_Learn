
class Popelushka  {
    constructor (name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

    info(){
        console.log(this);
    }

}



let Oksana = new Popelushka('Oksana', 23, 38);
let Anna = new Popelushka('Anna', 22, 39);
let Solomia = new Popelushka('Solomia', 28, 37);
let Vika = new Popelushka('Vika', 18, 40);
let Natalia = new Popelushka('Natalia', 25, 36);




class Prinss {
    constructor (name, age, tyfla){
        this.name = name;
        this.age = age;
        this.tyfla = tyfla;
    }
    info(){
        console.log(this);
    }
}

let Roman = new Prinss('Roman', 23, 38);
let Taras= new Prinss('Taras', 28, 32);
let Dimas = new Prinss('Dimas', 18, 35);
let Nazar = new Prinss('Nazar', 31, 42);
let Viktor = new Prinss('Viktor', 23, 36.5);



let arrPopelushka = [Oksana,Anna,Solomia,Vika,Natalia];
let arrPrinss = [Roman,Taras,Dimas,Nazar,Viktor];
let sum = [];



// let sum =  arrPrinss.map(function (value) {
//
//
//     console.log(value.tyfla);
//
// });


for (i = 0, j = 0, i < arrPopelushka.length, j < arrPrinss.length; i++, j++;){
    if ((arrPopelushka.map(value => value.size)) === (arrPrinss.map(value1 => value.tyfla))){
        sum.push(22)
    }


}


console.log(sum);


