// let str = 'Hello Word';
// let random = 50;
// let i = 0;
//
// function print(str, random, i) {
//    if(i < str.length){
//
//    }


// if (i < str.length) {
//     //     setTimeout(() => {
//     //         console.log(str[i]);
//     //         // print(str, random, i++);
//     //
//     //
//     //     }, random)
//     // }


// }
//
// print(str, random, i);


// function random() {
//
//     let x = [];
//     while (x.length < 5){
//         let ran = +(Math.random() * 1000).toFixed(0);
//         x.push(ran)
//     }
//
//     return x
// }

// let str = 'Hello World';
// let i = 11;
//
//
// function druk(str) {
//
//     let rand = parseInt(Math.random() * 500);
//
//     setTimeout(() => {
//         if (i > 0) {
//             console.clear();
//             console.log(str.slice(str.length, 1));
//             i--;
//             druk(str)
//         }
//     }, rand);
//
//
// }
//
// druk(str);
//



let str = 'Hello World';
let i = 1;



function druk(str) {

    let rand = parseInt(Math.random() * 500);

    setTimeout(() => {
        if (i < str.length + 1) {
            console.clear();
            console.log(str.slice(0, i));
            i++;
            druk(str)
        }
    }, rand);


}

druk(str);







// for (var i = 1; i < 10; i++) {
//     setTimeout(function(){
//         console.log(i)
//     },1000);
// }







