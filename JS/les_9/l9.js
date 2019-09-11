// Array.prototype.my = function () {
//     console.log('Hellow');
// };
// let arr = [1, 2, 3, 4, 5];
// arr.my();

/** Взять библиотечный класс Array и добавить ему новый метод который
 - выводит наименьший числовой элемент массива */


// Array.prototype.Minn = function (arr = []) {
//     console.log(Math.min(...arr));
// };
// let arr1 = [1, 2, 3, 4, 5, 5, 7];
// arr1.Minn(arr1);


// Array.prototype.Minn = function () {
//     console.log(Math.min(...this));
// };
// let arr1 = [456,543,7,5,458,56995,95];
// arr1.Minn();


/** - выводит наименьший по размеру строчный элемент массива */

// let arr1 = ['Roman', 'Taras', 'Nat', 'Dima', 'ababababba', 1,3,4];
//
// Array.prototype.Minlengs = function () {
//     let minLengss = this[0];
//     for (i = 0; i < this.length; i++) {
//         if (minLengss.length > this[i].length) {
//             minLengss = this[i]
//
//
//         }
//     }
//     // return minLengs;
//     console.log(minLengss);
// };
//
// arr1.Minlengs();


/** - выводит только объекты у которых присутствует поле id */


let arr = [
    {name: 'Roman', age: 23},
    {name: 'Taras', age: 28, id: 134346},
    {name: 'Roman', age: 23, id: 346343},
];


Array.prototype.idSerch = function () {
    let result = this.filter(function (value) {
        if (value.id !== this.id) {
            return true
        }
    });
    console.log(...result);
};
arr.idSerch();






