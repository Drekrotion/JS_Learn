
/*
function girst (n1, n2, n3) {
    let small = Math.min(n1, n2, n3);
    console.log(small);
    return small
}

let girst = (n1: 5, n2: 10, );*/


/**TASK 1 */



/*
function a(arr) {
    console.log(arr);
}


let arr = a([]);

/!** 2 стіорити функцію яка заповнює масив рандомними числами та виводить його. *!/


function x (arr) {
    while (arr.length < 10) {
        let rand = parseInt(Math.random() * 50);
        arr.push(rand);
    }
}
*/





/** 1. приймає три числа та виводить та повертає найменьше. */



/*function number (a,b,c) {
    const big = Math.min(a,b,c);
    console.log(big);

    return big

}

let big = number(45,55,10);

console.log(big);*/


/** 2. приймає три числа та виводить та повертає найбільше.*/


/*
function nam3 (a,b,c) {
    const min = Math.max(a,b,c);
    console.log(min);

    return min
}

let min = nam3(45,6,2);
console.log(min);*/


/** 4. виводить масив.*/

// function fourTask() {
//     console.log(Object.values(arguments))
// }
//
// fourTask(23465,62,6245,6,456,452,27,245,7245,7,247);


/** 5.повертає найбільше число з масиву. */


/*
function fiveTask(){

    let a = (arguments);
    console.log(Object.values(arguments));

    let b = Math.max(...a);
    console.log(b);

}

fiveTask(234,523,46,234,9999,234,234,632,443,6,3246,4,2346,23,46,263);
*/


/*
function fiveTusk () {
    let values = Object.values(arguments);
    console.log(values);

    let biggest = values[0];
    for(i = 1; i < values.length; i++){
        if(biggest < values[i]) {
            biggest = values[i]
        }

    }
    console.log(biggest);
}



fiveTusk(345,34,5,4535,34,5,3,3,45,345,43,435,6,7,6534,);*/



/** 6. повертає найменьше число з масиву */

/*function sixTask () {
    let values = Object.values(arguments);
    console.log(values);

    let min = values[0];

    for (let num of values) {
        if (min > num){
            min = num
        }

    }
    console.log(min);
}


sixTask(456,36,56,543,3568,58,65,79,1,758,67,67,3,235,25,31);*/


/** 3. приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше */

/*

function threeTask() {
    let values = Object.values(arguments);
    console.log(values);

    let max = values [0];
    for (i = 1; i < values.length; i++){
        if (max < values[i]){
            max = values[i]
        }
    }

    let min = values[0];
    for (i = 1; i < values.length; i++){
        if(min > values[i]){
           min = values[i]
        }
    }
    console.log(max);



    return min

}


let min = threeTask(45,64,53451,3453,7,57,358,8,1,9576,9,59,78,87,8,955);

console.log(min);


*/



/** 8. приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" */

/*
function lastTusk(array, i) {
    if (!Array.isArray(array) || typeof i !== 'number'){
        throw new Error('Is not number')
    }
    if (i < 0 || i > array.length - 1) {
        throw new Error('I is not correct')
    }

    let valueToChange = array[i];

    array[i] = array[i+1];
    array[i+1] = valueToChange;

    console.log(array);

}


lastTusk([34,634,6,345643,63,6,453,7,345,7], 1 );
*/



/** ТАСКИ З ПРАКТИКИ */

/** 1 створити функцію яка виводить масив  */

function see () {
    console.log(Object.values(arguments));

    return arguments
}

// see(random());


/**  2 стіорити функцію яка заповнює масив рандомними числами та виводить його.
 Для виведення використати попвередню функцію.
 */



function random() {
    
    let x = [];
    while (x.length < 5){
    let ran = +(Math.random() * 10).toFixed(0);
    x.push(ran)
    }

    return x
}

// see(random());


function findMaxNumber() {
    let arr = random();
    let bigger = Math.max(...arr);
    // console.log(arr);
    return bigger

}


// see(findMaxNumber());


/**  4 --//-- яка скаладає значення елементів масиву та повертає його. */


function sumator() {
    let other = random();
    let sum = 0;
    for (let i = 0; i < other.length; i++) {
        sum = sum + other[i]
    }
    console.log(other);
    return sum
}

// see(sumator());


/** --//-- яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив. */


function fiveTask() {
    let arr1 = random();
    let arr2 = random();
    let arr3 = [];
    for (i = 0, j = 0; i < arr1.length && j < arr2.length; i++, j++){
        if (i === j){
        let sumarr = arr1[i] + arr2[i];
        arr3.push(sumarr);
        }
    }

    // console.log(arr1);
    // console.log(arr2);

    return arr3;

}

// see(...fiveTask());


/** --// -- яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
 Двожина масиву від 2 до 100
 Приклад
 [1,0,6,0,3] => [1,6,3,0,0]
 [0,1,2,3,4] => [1,2,3,4,0]
 [0,0,1,0]   => [1,0,0,0] */


function sixTask() {
    let arr = [1,0,6,0,3];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0){
            result.push(arr[i])
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== 0){
            result.unshift(arr[i])
        }

    }


    return result
}


see(...sixTask());




