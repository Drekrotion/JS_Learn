


// function sum(a,b, cb) {
//     let summ = a + b;
//
// setTimeout(() => {
//     cb(summ)
// },1000)
//
//
// }
//
// sum(5, 10, function (resalt) {
//     console.log(resalt);
// });



// function sum(a,b, cb) {
//     if(cb === '+'){
//         let sum1 = a + b;
//         console.log(sum1);
//         return
//     } if (cb === '-') {
//         let sum2 = a - b;
//         console.log(sum2);
//         return 0;
//     } else {
//         throw new Error('Bla bla bla')
//     }
//
// }
//
// sum(10,5, function () {
//
// });




function sort(arr, cb) {

    let action = cb();

    if(action === '+'){
        let one = arr.sort(function (el1,el2) {
            return el1 - el2;
        });
        console.log(one);
        return 0

    } if (action === '-') {
        let two = arr.sort(function (el1,el2) {
            return el2 - el1
        });
        console.log(two);
        return 0
    } else {
        throw new Error('Bla bla bla')
    }
}


sort([23,55,346,4,6,2546,54,7,57,99999,1], function () {
    return '+'
});






