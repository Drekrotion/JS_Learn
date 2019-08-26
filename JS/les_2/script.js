// Завдання №1 //

/*let a = 0;

if (+a === 0){
    console.log(true)
}  else{
    console.log(false)
}*/

// Завдання №2 //

// 1-й варіант  //



// 2-й варіант //

/*let min = +prompt("enter reverse");

    if (min >= 0 && min < 15) {
        console.log('persha');
    }
    if (min >= 15 && min < 30) {
        console.log('druga');
    }
    if (min >= 30 && min < 45) {
        console.log('tretja');
    }
    if (min >= 45 && min < 59) {
        console.log('4-ta');
    }*/


/*let min = +prompt("enter reverse")

    switch (min) {
        case (min < 15) :
            console.log('persha');
            break;
        case (min >= 15 && min < 30 && min) :
            console.log('druga');
            break;
        case (min >= 30 && min < 45 && min) :
            console.log('tretja');
            break;
        case (min >= 45 && min < 59 && min) :
            console.log('4-ta');
            break;
        default :
         console.log('Next hour')
    }*/

/*Завдання №3*/

/*let a = +prompt("enter a");
let b = +prompt("enter b");

  if (a <= 1 && b >=3) {
      console.log(a+b)
  }
  else {
      console.log(a-b)
  }*/


/*Завдання №4*/

/*let mouth = +prompt("enter 1-12")

    if (mouth >= 0 && mouth <= 2 || mouth ===12) {
        console.log('ЗИМА')
    }
    if (mouth >= 3 && mouth <= 5) {
        console.log('ВЕСНА')
    }
    if (mouth >= 6 && mouth <= 8) {
        console.log('ЛІТО')
    }
    if (mouth >= 9 && mouth <= 11) {
        console.log('ОСІНЬ')
    }*/


/*Завдання №5*/

/*
let num = +prompt("enter 1-4")

    switch (num) {
        case 1 :
          console.log('Зима');
        break;
        case 2 :
          console.log('Весна');
        break;
        case 3 :
          console.log('Літо');
        break;
        case 4 :
          console.log('Осінь');
        break;
    default :
          console.log('Anouther planet')
        break;
    }

*/

/*Завдання №6*/

/*
let num = +prompt("enter 1-12");
let result;
    switch (num) {

        case 1 :
            result = 'Січень';
            console.log(result);
        break;

        case 2 :
            console.log('Лютий');
        break;

        case 3 :
            console.log('Лютий');
        break;
    }
*/


/*З ЛЕКЦІЇ*/

// if (2 <= 5) {
//     console.log(true);
// }





/*let a = 25;
                    console.time('if')
if (a > 10) {
    console.log('a is bigger 10')

    if (a > 20) {
    console.log('a is bigger 20')
    }
} else if (a === 10) {
    console.log('PRIVET')
}
  else {
    console.log('E K A')
}
                    console.timeEnd('if')

console.log('I am here');
   */




/*let day = 25;
let month = 'winter';

if (day > 20 && month === 'winter' ) {
    console.log('New Year')
}*/


// i або //

/*
let login = 'Dima';
let password = '12345';
let role = 'admin';

if (login === 'Dima' && (password === '12345' || role === 'admin')) {
    console.log('login')
}*/


// S W I T C H //

// let poraRoku = 'win';
//
// switch (poraRoku) {
//     case 'spring' :
//         console.log('spring is coming');
//         break;
//     case 'winter' :
//         console.log('winter is coming');
//         break;
//     case 'summer' :
//         console.log('summer is coming');
//         break
//     default :
//         console.log('Another planet')
// }


// Тернарний запис//

/*
(poraRoku === 'winter') ? console.log(' SNOWING') : console.log('swimming')
*/

// Ц И К Л И //

// for (let i=0; i < 10; i++) {
//     console.log(i);
// }


/*let random = Math.random() * 59;  // рандомне значення
console.log(random);*/


// let month = Math.random() * (12 - 1) +1; // від 1 до 12


// let random = parseInt(Math.random() * (12 - 1) + 1 ); // рандом цілі числа
// console.log(random);




// TASK #1


/*let n1 = +prompt('num1');
let n2 = +prompt('num2');
let n3 = +prompt('num3');

if (n1 <= n2 && n2 <= n3 && n3 >= n1) {    //123
    console.log(n1);
    console.log(n2);
    console.log(n3);
} if (n2 >= n1 && n2 >= n3 && n1 >= n3) {  //231
    console.log(n3);
    console.log(n1);
    console.log(n2);
} if (n1 >= n2 && n1 >= n3 && n2 >= n3) {  //321
    console.log(n3);
    console.log(n2);
    console.log(n1);
} if (n1 >= n2 && n1 >= n3 && n3 >= n2) {  //312
    console.log(n2);
    console.log(n3);
    console.log(n1);
} if (n3 >= n1 && n3 >= n1 && n1 >= n2) { // 213
    console.log(n2);
    console.log(n1);
    console.log(n3);
} if (n1 <= n2 && n1 <= n3 && n2 >= n3) { // 132
    console.log(n1);
    console.log(n3);
    console.log(n2);
}*/


// TASK #2


/*let SVIT = prompt('Kolir svitofora');

switch (SVIT) {
    case '1' :
        console.log('go');
        break;
    case '2' :
        console.log('stop');
        break;
    case '3' :
        console.log('step');
        break;
    default :
        console.log('oter_go');
}*/


// TASK #3



/*let col = prompt('SVIT');
let car = confirm('car?');

if (col === 'green' && car === false){
    console.log('go');
} else if (col === 'green' && car === true) {
    console.log('stopcargo');
} else if (col === 'yellow' && car === true) {
    console.log('pause');
} else if (col === 'yellow' && car === false) {
    console.log('pauseother');
} else if (col === 'red' && car === false) {
    console.log('stopstap');
} else if ( col === 'red' && car === true) {
    console.log('stopandstop');
} else {
    console.log('go_HOUME');
}*/
















