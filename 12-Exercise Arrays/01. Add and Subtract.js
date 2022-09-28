function f2(params) {

    let sumOld = 0;
    let sumNew = 0;

    for (let i = 0; i < params.length; i++) {
        sumOld += params[i];
        if (params[i] % 2 === 0) {
            params[i] += i;
        } else {
            params[i] -= i;
        }
        sumNew += params[i];
    }

    console.log(params);
    console.log(sumOld);
    console.log(sumNew);
}

f2(
    [-5, 11, 3, 0, 2]
);



//console.log(`-----------------`);