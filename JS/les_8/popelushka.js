class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

    info() {
        console.log(this);
    }

}


let Oksana = new Popelushka('Oksana', 23, 38);
let Anna = new Popelushka('Anna', 22, 35);
let Solomia = new Popelushka('Solomia', 28, 37);
let Vika = new Popelushka('Vika', 18, 40);
let Natalia = new Popelushka('Natalia', 25, 36.5);


class Prinss {
    constructor(name, age, tyfla) {
        this.name = name;
        this.age = age;
        this.tyfla = tyfla;
    }

    info() {
        console.log(this);
    }
}

let Roman = new Prinss('Roman', 23, 38);
let Taras = new Prinss('Taras', 28, 32);
let Dimas = new Prinss('Dimas', 18, 35);
let Nazar = new Prinss('Nazar', 31, 42);
let Viktor = new Prinss('Viktor', 23, 36.5);


let arrPopelushka = [Oksana, Anna, Solomia, Vika, Natalia];
let arrPrinss = [Roman, Taras, Dimas, Nazar, Viktor];


// function mar(arr1, arr2) {
//
//     for (i = 0; i < arrPopelushka.length; i++){
//         for (j = 0; j < arrPrinss.length; j++){
//             if (arrPopelushka[i].size === arrPrinss[j].tyfla){
//                 console.log(arrPrinss[j].name);
//                 console.log(arrPopelushka[i].name);
//
//             }
//
//         }
//
//     }
// }
//
// mar(arrPopelushka,arrPrinss);


// arrPrinss.forEach(function (prince) {
//    arrPopelushka.findIndex(function (popel) {
//        if (prince.tyfla === popel.size){
//            console.log(prince.name);
//            console.log(popel.name);
//        }
//    })
// });


















// function sort(arr, cb) {
//     let value = cb();
//
//     if (value === 'down'){
//         arr.sort((el1,el2,) => el2 -el1);
//         console.log(arr);
//     } else {
//         arr.sort((el1, el2) => el1 - el2);
//         console.log(arr);
//     }
// }
//
// let arr1 = [34,5,246,7,5468,5,3,525,23,45,1,325,15,99999];
//
// sort(arr1,function () {
//     return 'sgsr'
// });


// let arr1 = [2346, 6, {
//     name: 'Roman',
//     age: 23,
//     car: {carr: false, skyter: true}
// }, 246, [436, 456, 465, 5, 567, 567, 7, 69, 5, [2, 4, 234, 4, 235, 3, 64357, 357, 7], 3, 3, 5, 5342, 5], 4, 56, 24, 56256, 265];
//
//
// function recursator3000(arr) {
//
//     arr.forEach((value) => {
//         if (Array.isArray(value)) {
//             recursator3000(value);
//             return value
//         }
//         if (typeof value === "object" && typeof value !== null) {
//             let objValue = Object.values(value);
//             recursator3000(objValue);
//             return value
//         }
//
//         console.log(value);
//     });
//
// }
//
//
// recursator3000(arr1);






