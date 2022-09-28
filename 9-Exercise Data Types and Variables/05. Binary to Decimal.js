function f2(params) {
    params+="";
    let output = 0;
    for (let i = 0; i < params.length; i++) {
        output += ((Math.pow(2, i)) * params[params.length-1 - i]);

    }

    console.log(output);

}

f2(
    "00001000"
);



//console.log(`-----------------`);