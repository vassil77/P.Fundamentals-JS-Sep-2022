function Login(params) {
    i = 0;
    let userName = params[i++];
    let password = "";

    for (let j = 0; j < userName.length; j++) {
        password += userName[userName.length - 1 - j];

    }
    let currentTry = params[i++];

    for (let k = 1; k <= 4; k++) {
        if (currentTry === password) {
            console.log(`User ${userName} logged in.`);
            break;
        } else if (i < 5) {
            console.log(`Incorrect password. Try again.`);
        } else if (i === 5) {
            console.log(`User ${userName} blocked!`);
        }
        currentTry = params[i++];

    }

}

Login(
    ['sunny','rainy','cloudy','sunny','not sunny']
            );



//console.log(`-----------------`);