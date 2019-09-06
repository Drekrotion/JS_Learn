


/*
function fact(num, cb) {
    if (num !== 1) {
        return num * cb(num -1, cb)
    } else {
        return 1
    }
}



let sum = fact(5, fact);

console.log(sum);
*/



// function fibonacci(max) {
//     let result = [0, 1];
//
//     for (let i = 1; result[i] < max; i++) {
//         result.push(result[i] + result[i - 1]);
//     }
//
//     console.log(result);
//
// }
//
//
// fibonacci(10);
//

































function fib(max) {
    let result = [0,1];

    for (let i = 1; result[i] < max; i++ ){
        result.push(result[i] + result[i - 1])
    }

    console.log(result);

}

fib(9);