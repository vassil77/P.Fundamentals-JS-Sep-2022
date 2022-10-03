function f2(params) {
    let input = params;
    let targets = input.shift();
    targets = targets.split(" ");
    for (let j = 0; j < targets.length; j++) {
        targets[j] = Number(targets[j]);
    }
    let shotTargets = 0;
    let command = input.shift();

    //console.log(targets); // test Print

    while (command !== "End") {
        command = Number(command);
        if (command >= 0 && command < targets.length) {
            if (targets[command] !== -1) {
                shotTargets++;
                let currentTarget = Number(targets[command]);
                targets[command] = -1;
                for (let i = 0; i < targets.length; i++) {
                    if (targets[i] !== -1) {
                        if (targets[i] > currentTarget) {
                            targets[i] -= currentTarget;
                        } else {
                            targets[i] += currentTarget;
                        }
                    }
                }
            }
        }


       // console.log(targets); // test Print
        command = input.shift();
    }

    targets = targets.join(" ");
    console.log(`Shot targets: ${shotTargets} -> ${targets}`);
}

//-----------------
f2
(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

;