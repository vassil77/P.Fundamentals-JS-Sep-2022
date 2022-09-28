function f2(params) {

    let isMagic = true;


    for (let i = 0; i < params.length; i++) {
        let sum2 = 0;
        let sum3 = 0;
        for (let j = 0; j < params.length; j++) {
            sum2 += params[i][j];
            sum3 += params[j][i];

        }

        if (sum2 !== sum3) {
            isMagic = false;
            break;
        }

        
    }

    console.log(isMagic);
}

//-----------------
f2(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);



//console.log(`-----------------`);