function f2(params) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < params.length; i++) {
        if (params[i] % 2 === 0) {
            sumEven += params[i];
        } else {
            sumOdd += params[i];
        }

    }
    console.log(sumEven - sumOdd);

}

f2(
    [2, 4, 6, 8, 10]
);



//console.log(`-----------------`);