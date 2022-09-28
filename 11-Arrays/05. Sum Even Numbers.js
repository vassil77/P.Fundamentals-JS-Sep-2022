function f2(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        params[i] = parseInt(params[i]);
        if (params[i] % 2 === 0) {
            sum += params[i];
        }
    }

console.log(sum);


}

f2(
    ['2','4','6','8','10']
);



//console.log(`-----------------`);