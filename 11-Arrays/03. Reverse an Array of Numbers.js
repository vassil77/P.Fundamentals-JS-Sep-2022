function f2(n, params) {
    let array = [];
    let reverse = [];
    for (let i = 0; i < n; i++) {
        array[i] = params[i];
    }
    for (let j = 0; j < n; j++) {
        reverse[j] = array[n - 1 - j];
    }

    console.log(reverse.join(" "));
}


f2(
    2, [66, 43, 75, 89, 47]

);



//console.log(`-----------------`);