function f2(a, b, c) {

    let p = (a + b + c) / 2;
    let A = Math.pow(p * (p - a) * (p - b) * (p - c), 0.5);

    console.log(A);

}

f2(
    3,
    5.5,
    4
);



//console.log(`-----------------`);