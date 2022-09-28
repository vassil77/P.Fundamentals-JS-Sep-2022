function f2(params) {

    let isMagic = true;
    let sum1 = 0;


    for (let k = 0; k < params.length; k++) {
        sum1 += params[0][k];
    }

    for (let i = 0; i < params.length; i++) {
        let sum2 = 0;
        let sum3 = 0;
        for (let j = 0; j < params.length; j++) {
            sum2 += params[i][j];
            sum3 += params[j][i];

        }

        if (sum2 !== sum1) {
            isMagic = false;
            break;
        }

        if (sum3 !== sum1) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

//-----------------
f2(
    [
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]
);



//console.log(`-----------------`);