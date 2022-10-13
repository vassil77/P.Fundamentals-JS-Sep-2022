function f2(params) {

    //let pattern = /([A-z0-9]{6,10})[0-9]{2,}/g;
    //let valid = params.match(pattern);
    //console.log(valid); //test
    //console.log(params.length);//test

    let letterDigitsOnly = /^[a-zA-Z0-9]+$/g;
    //let LDcheck = params.match(letterDigitsOnly);
    //console.log(LDcheck);//test
    let isLD = letterDigitsOnly.test(params);
    //console.log(isLD); //test

    let digits2 = /[0-9]{2,}/g;
    let digitTest = params.match(digits2);

    //console.log(valid);//test

    let isValid = true;

    if (params.length < 6 || params.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (params === "") {

    } else {

        if (!isLD) {
            console.log("Password must consist only of letters and digits");
            isValid = false;
        }
    }
    if (digitTest === null) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }

}

//-----------------
f2(
    '123dfgd*'
);



//console.log(`-----------------`);