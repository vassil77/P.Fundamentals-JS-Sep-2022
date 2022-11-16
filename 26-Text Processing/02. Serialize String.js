function f2([params]) {

    let output = {};

    for (let i=0;i<params.length;i++) {
        if (!output.hasOwnProperty(params[i])) {
            output[params[i]] = i;
        }else{
            output[params[i]] +=  "/" + i;
        }
    }

    for (const char in output) {
        console.log(`${char}:${output[char]}`);
    }


}

//Judge__________________
f2(
    ["avjavamsdmcalsdm"]
    );