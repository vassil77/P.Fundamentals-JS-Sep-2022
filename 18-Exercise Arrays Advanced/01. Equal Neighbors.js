function f2(params) {
    let i = params.length;
    let j = params[0].length;
    let result = 0;

    for (let k = 0; k < i; k++) {
        for (let l = 0; l < j - 1; l++) {
            if (params[k][l] === params[k][l + 1]) {
                result++;
                //console.log(k,l);//test
            }
        }
    }

    for (let k = 0; k < j; k++) {
        for (let l = 0; l < i - 1; l++) {
            if (params[l][k] === params[l + 1][k]) {
                result++;
            }
        }
    }

    //console.log(params[1][2]===params[2][2]);//test

    console.log(result);
}

//-----------------
f2(
    [
        ['2', '2', '5', '7', '4'],
        ['4', '0', '5', '3', '4'],
        ['2', '5', '5', '4', '2']
    ]
);



//console.log(`-----------------`);