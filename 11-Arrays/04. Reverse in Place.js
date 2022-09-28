function f2(params) {

    for (let i = 0; i < params.length / 2; i++) {
        let buffer = params[i];
        params[i]=params[params.length - 1 - i]  ;
        params[params.length - 1 - i] =buffer;

    }

    console.log(params.join(" "));

}

f2(
    ['33', '123', '0', 'dd']
        );



//console.log(`-----------------`);