function f2(array) {

    let result = [];
    let max = array[0];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
            result[j] = array[i];
            j++;
        }

    }
    console.log(result.join(" "));


}

//-----------------
f2(
    [ 20, 3, 2, 15, 6, 1]
        );



//console.log(`-----------------`);