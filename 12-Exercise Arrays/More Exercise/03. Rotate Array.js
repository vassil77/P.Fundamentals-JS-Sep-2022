function f2(params) {

    let rotations = Number(params[params.length - 1]);
    let output = params;
    output.pop();


    for (let j = 1; j <= rotations; j++) {

        let buffer = output[output.length - 1];
        for (let i = (output.length - 1); i >0 ; i--) {
            output[i] = output[i-1];
        }

        output[0] = buffer;

    }


    console.log(output.join(" "));



}

//-----------------
f2(
    ['1', '2', '3', '4', '2']
        );



//console.log(`-----------------`);