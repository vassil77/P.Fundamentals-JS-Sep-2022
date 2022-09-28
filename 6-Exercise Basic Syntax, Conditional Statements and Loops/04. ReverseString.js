function ReverseString(params) {
    let reverse = "";
    for (let i = 0; i < params.length; i++) {
        reverse += params[params.length - 1 - i];

    }

    console.log(reverse);


}

ReverseString("1234");



//console.log(`-----------------`);