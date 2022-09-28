function f2(params) {



    for (let i = 0; i < (params.length - 1); i++) {

        for (let j = 0; j < (params.length - 1 - i); j++) {
            params[j] = params[j] + params[j + 1];

        }

    }
    console.log(params[0]);

}

f2(
    [1]
);



//console.log(`-----------------`);