/** - Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. */

/*
let arr1 =['a', 'b', 'c'];
let arr2 = [1,2,3];

let arr3 = arr1.concat(arr2);

console.log(arr3);
*/

/** - Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/

// first method

/*
let arr = ['a','b','c'];

let arr2 = arr.concat(1,2,3);

console.log(arr2);
*/


// second method
/*
let arr = ['a','b','c'];

arr.splice(3,0,1,2,3);

console.log(arr);
*/


/** - Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */
/*
let arr = [1,2,3];

let arr2 = arr.reverse();

console.log(arr2);*/


/** - Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. */

/*
let arr = [1,2,3];

arr.splice(3,0,4,5,6);

console.log(arr);
*/

/** - Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

// first method
/*
let arr = [1,2,3];

arr.splice(0,0,4,5,6);

console.log(arr);
*/

//second method

/*
let arr = [1,2,3];

arr.unshift(4,5,6);

console.log(arr);
*/

/** - Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент при помощи shift */
/*
let arr = ['js', 'css', 'jq'];

let firstItem = arr.shift(arr[0]);

console.log(firstItem);
*/

/** - Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент при помощи pop */

/*
let arr = ['js', 'css', 'jq'];

let lastItem = arr.pop(arr[arr.length]);

console.log(lastItem);
*/

/** slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */

/*
let arr = [1,2,3,4,5];

let arr2 = arr.slice(0,3);

console.log(arr2);
*/


/** - slice. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы */
/*
let arr = [1,2,3,4,5];

let arr2 = arr.slice(0, arr.length);

console.log(arr2);
*/


/** Створити обєкт автомобіля з полями:
 Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
 Власник автомобіля теж має бути обєкт, у якого є поля
 Імя, вік, стаж водіння.
 Створити не менше 7 та не більше 20 машинок.
 1. Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
 2. На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
 3. Для початку вкладіть всі наші створені автомобілі в масив cars.
 4. Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
 5. Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
 6. Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі */


let cars = [
    {
        model: 'Seat Arona',
        enginePowerHP: 115,
        owner:
            {
                name: 'Yaroslav',
                age: 25,
                expYears: 2
            },
        price: 35000,
        year: '2018'
    },
    {
        model: 'Skoda Fabia',
        enginePowerHP: 80,
        owner:
            {
                name: 'Oleksandr',
                age: 25,
                expYears: 2
            },
        price: 5000,
        year: '2008'
    },
    {
        model: 'Fiat Doblo',
        enginePowerHP: 95,
        owner:
            {
                name: 'Oleg',
                age: 25,
                expYears: 6
            }
                ,
        price: 6500,
        year: '2007'
    },
    {
        model: 'Ford Transit',
        enginePowerHP: 90,
        owner:
            {
            name: 'Nazar',
            age: 26,
            expYears: 4
            },
        price: 2000,
        year: '2000'
    },
    {
        model: 'Mercedes E225',
        enginePowerHP: 170,
        owner:
            {
                name: 'Oleksiy',
                age: 21,
                expYears: 2
            },
        price: 3500,
        year: '2000'
    },
    {
        model: 'Lada 21011',
        enginePowerHP: 80,
        owner:
            {
                name: 'Yan',
                age: 24,
                expYears: 5
            },
        price: 1500,
        year: '1976'
    },
    {
        model: 'Seat Leon',
        enginePowerHP: 230,
        owner:
            {
                name: 'Bogdan',
                age: 31,
                expYears: 4
            },
        price: 8000,
        year: '2008'
    },
    {
        model: 'Honda Civic',
        enginePowerHP: 300,
        owner:
            {
                name: 'Artur',
                age: 24,
                expYears: 6
            },
        price: 10000,
        year: '2010'
    },
    {
        model: 'Hyndai Sonata',
        enginePowerHP: 130,
        owner:
            {
                name: 'Sergiy',
                age: 47,
                expYears: 23
            },
        price: 8000,
        year: '2009'
    },
    {
        model: 'Mersedes W140',
        enginePowerHP: 250,
        owner:
            {
                name: 'Taras',
                age: 35,
                expYears: 12
            },
        price: 10000,
        year: '1995'
    },
    {
        model: 'BMW 735',
        enginePowerHP: 300,
        owner:
            {
                name: 'Dmytro',
                age: 34,
                expYears: 14
            },
        price: 15000,
        year: '2003'},
    {
        model: 'Ford Focus',
        enginePowerHP: 200,
        owner:
            {
                name: 'Evgeniy',
                age: 28,
                expYears: 3
            },
        price: 30000,
        year: '2018'
    },
    {
        model: 'Tesla model S',
        enginePowerHP: 400,
        owner:
            {
                name: 'Vasyl',
                age: 52,
                expYears: 30
            },
        price: 50000,
        year: '2018'
    },
    {
        model: 'Chevrolet Aveo',
        enginePowerHP: 95,
        owner:
            {
                name: 'Mykola',
                age: 23,
                expYears: 4
            },
        price: 5000,
        year: '2008'
    },
    {
        model: 'Ford Mustang',
        enginePowerHP: 350,
        owner:
            {
                name: 'Ivan',
                age: 29,
                expYears: 8
            },
        price: 28000,
        year: '2015'
    },
    {
        model: 'Audi A3',
        enginePowerHP: 150,
        owner:
            {
                name: 'Sviatoslav',
                age: 25,
                expYears: 2
            },
        price: 8500,
        year: '2008'
    },
    {
        model: 'Moskvich 412',
        enginePowerHP: 60,
        owner:
            {
                name: 'Roman',
                age: 26,
                expYears: 3
            },
        price: 1000,
        year: '1974'
    },
    {
        model: 'KRAZ',
        enginePowerHP: 400,
        owner:
            {
                name: 'Valeriy',
                age: 34,
                expYears: 2
            },
        price: 20000,
        year: '1975'
    },
    {
        model: 'Hummer H1',
        enginePowerHP: 450,
        owner:
            {
                name: 'Ira',
                age: 19,
                expYears: 1
            },
        price: 50000,
        year: '2010'
    },
    {
        model: 'Smart',
        enginePowerHP: 110,
        owner:
            {
                name: 'Oleksandr',
                age: 20,
                expYears: 1
            },
        price: 15000,
        year: '2010'
    },
];



let carThenYwo = [];

for (i = 0; i < cars.length; i += 2){
    carThenYwo.push(cars[i].enginePowerHP)
}

console.log(carThenYwo);


let carUpPorewHp = carThenYwo.map(function (value) {
    return parseInt(value * 1.1)
});

console.log(carUpPorewHp);



for (i = 0, j = 0; i < cars.length && j < carUpPorewHp.length; i += 2, j++){
    cars[i].enginePowerHP = carUpPorewHp[j]
}

/** 1. Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності). */

console.log('_______________________');
cars.forEach(function (value) {
    console.log(value.model);
    console.log(value.enginePowerHP);

});


/**  */