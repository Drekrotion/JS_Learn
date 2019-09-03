let arr = [32,46,357,[999,888,[1111100],777,666,555],468,324,131,4];

let i = 0;

function see() {
    if (i < arr.length){
        if (Array.isArray(arr[i])) {
            arr.splice(3,1, ...arr[i])
        } if (Array.isArray(arr[i])) {
            arr.splice(5,1, ...arr[i])
        }
        console.log(arr[i]);
        ++i;
        see()
    }

}

see();




