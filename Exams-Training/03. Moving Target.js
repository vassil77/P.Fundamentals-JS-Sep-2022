function f2(params) {
    let input = params;
    let targets = input.shift();
    targets = targets.split(" ");
    for (let i = 0; i < targets.length; i++) {
        targets[i] = Number(targets[i]);
    }
    let command = input.shift();

    while (command !== "End") {
        command = command.split(" ");
        command[1]=Number(command[1]);
        command[2]=Number(command[2]);

        switch (command[0]) {
            case "Shoot":
                if (command[1] >= 0 && command[1] < targets.length) {
                    if (targets[command[1]] > command[2]) {
                        targets[command[1]] -= command[2];
                    } else {
                        targets.splice(command[1], 1);
                    }
                }
                break;


            case "Add":
                if (command[1] >= 0 && command[1] < targets.length) {

                    targets.splice(command[1], 0, command[2]);

                } else {
                    console.log(`Invalid placement!`);
                }
                break;


            case "Strike":
                let r = Number(command[2]);
                if (command[1] - r >= 0 && command[1] + r < targets.length) {

                    targets.splice((command[1] - r), (2 * r + 1));

                } else {
                    console.log(`Strike missed!`);
                }
                break;




            default:
                break;
        }


        command = input.shift();
    }



    console.log(targets.join("|"));
}

//-----------------
f2
(["1 2 3 4 5",
"Strike 0 1",
"End"])
    
    ;