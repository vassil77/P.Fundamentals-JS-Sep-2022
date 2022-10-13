function f2(params) {
    
    let value = 0;
    let command;
    
    for (let i = 0; i < params.length; i++) {
        command = params[i];
        switch (command) {
            case "soap":
                value += 10;
                break;
            case "water":
                value *= 1.20;
                break;
            case "vacuum cleaner":
                value *= 1.25;
                break;
            case "mud":
                value *= 0.90;
                break;
        }

    }
    //console.log(params.length);
    console.log(`The car is ${value.toFixed(2)}% clean.`);





}

//-----------------
f2(
    ["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]
    );



//console.log(`-----------------`);