function f2(params) {
    let input = params;
    let energy = input.shift();
    let wonBattles = 0;
    let command = input.shift();
    let currentBattle = 0;
    let isGameOver = false;

    while (command !== "End of battle" && energy > 0) {
        currentBattle++;
        if (Number(command) <= energy) {
            if (currentBattle % 3 === 0) {
                energy -= Number(command);
                wonBattles++;
                energy += wonBattles;
            } else {
                energy -= Number(command);
                wonBattles++;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            isGameOver = true;
            break;
        }


        command = input.shift();
    }

    if (!isGameOver) {
        if (command === "End of battle") {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);

        }
    }

    // if (energy<=0) {
    //    console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
    //}

}

//-----------------
f2
(["200",
"54",
"14",
"28",
"13",
"End of battle"])

;