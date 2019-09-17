let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function maxMinIndex(array, key) {
    let minIndex = array.indexOf(key);
    console.log(minIndex);

    if (minIndex !== -1) {
        let b = 0;
        let a = minIndex;
        while (a !== -1) {
            b = a;
            a = array.indexOf(key, a + 1);
        }
        console.log(b);
    }
}
maxMinIndex(arr, 4);
console.log('_________________________________________');
maxMinIndex(arr, 8);

/**
 * Пример: n = 3, m = 3

 9  10 11 12
 5  6  7  8
 1  2  3  4




 3 6 9 12
 2 5 8 11
 1 4 7 10


 Answer: 3 (места 1, 5, 9)
 *
 * */






