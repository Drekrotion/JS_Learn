// function wakeUP(a) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(`Hello I ${a}`)
//         }, 1000)
//     })
// }
//
// wakeUP('wake UP')
//     .then(value => {
//         console.log(value);
//     });
//
// function goMyJob(b) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(`I go my ${b}`)
//         },2000)
//     })
// }
//
// goMyJob('JOBBBB')
//     .then(value => {
//         console.log(value);
//     },2000)
//
// function goHome() {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve('I go Home')
//         })
//     })
// }
//
// goHome()
//     .then(value => {
//         console.log(value);
//     });


function wakeUP(a) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(`Hello I ${a}`)
        }, 1000)
    })
}

function goMyJob(b) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(`I go my ${b}`)
        }, 1110)
    })
}

function goHome() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('I go Home')
        }, 1000)
    })
}


async function aaa() {
    let one = await wakeUP('wake UP');
    console.log(one);
    let two = await goMyJob('Job');
    console.log(two);
    let thee = await goHome();
    console.log(thee);
}

aaa();


// function f(a, b,) {
//     let res = a + b;
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve(res)
//         }, 1000)
//     });
// }
//
// f(5, 10)
//     .then(value => {
//         console.log(value);
//     });




