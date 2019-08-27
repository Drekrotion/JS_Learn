/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */


/*
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);
*/

/** - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/

/*
let arr = [1, 2, 3, 4, 5];

let arr2 = arr.splice(1, 3);

console.log(arr2);
*/


/**- Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/


/*
let arr = [1, 2, 3, 4, 5];

arr.splice(3, 0, 'a', 'b', 'c');

console.log(arr);
*/


/**- Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

/*let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');


console.log(arr);*/

/** - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его */

/*
let arr = [3, 4, 1, 2, 7];

arr.sort(function (el1, el2) {
    return el1 - el2
});

console.log(arr);
*/


/**- Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. */

/*
let obj = {js:'test', jq: 'hello', css: 'world'};

let objKey = Object.keys(obj);

console.log(objKey);
*/


/** 1. пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
 (По якому принципу його створювати - ваше рішення),
 та зберегти це в новий масив (первинний масив залишиться без змін)
 2. відсортувати його за індентифікатором */

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let usersNew = JSON.stringify(users);
usersNew = JSON.parse(usersNew);

for (i = 0; i < users.length; i++) {
    usersNew[i].id = randNum()
}

console.log(usersNew);
console.log('__________________________________________________________');
console.log(users);


usersNew.sort(function (el1, el2) {
    return el1.id - el2.id
});


console.log('__________________________________________________________');

console.log(usersNew);

function randNum() {
    let random;
    random = parseInt(Math.random() * 999);
    if (random === random) {
        random = parseInt(Math.random() * 999)
    }

    return random
}





