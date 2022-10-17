function f2(a, b) {
    let array = a;
    let [first, second, third] = b;

    array.splice(first);
    for (let i = 0; i < second; i++) {
        array.shift();
    }
    let numberOccur = array.filter(x => x === third).length;

    console.log(`Number ${third} occurs ${numberOccur} times.`);
}

//-----------------
f2(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);



//console.log(`-----------------`);