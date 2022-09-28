function f2(params) {

    let step = Number(params[params.length - 1]);
    let output = "";

    for (let i = 0; i < params.length - 1; i += step) {
        
        output += (params[i] + " ");
    }
    console.log(output);


}

//-----------------
f2(
    ['1', '2', '3', '4', '5', '6']
        );



//console.log(`-----------------`);