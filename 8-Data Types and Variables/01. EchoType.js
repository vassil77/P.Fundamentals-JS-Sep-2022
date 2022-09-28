function EchoType(params) {

    let type = typeof params;
    console.log(type);

    if (type === "string" || type === "number") {
        console.log(params);
    } else {
        console.log("Parameter is not suitable for printing");
    }

}

EchoType(
    null);



//console.log(`-----------------`);