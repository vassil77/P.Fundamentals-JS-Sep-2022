function f2(params) {
    let input = params;
    let neighborhood = input.shift().split("@").map(Number);
    let command = input.shift();
    let indexCupid = 0;

    while (command !== "Love!") {
        command = command.split(" ");
        let length = Number(command[1]);
        //console.log(length); //test
        indexCupid += length;

        if (indexCupid >= neighborhood.length) { //New index
            indexCupid = 0;
        }
        //new code
        if (neighborhood[indexCupid] === 0) {
            console.log(`Place ${indexCupid} already had Valentine's day.`);
        } else {
            neighborhood[indexCupid] -= 2;

            if (neighborhood[indexCupid] === 0) {
                console.log(`Place ${indexCupid} has Valentine's day.`);
            }
        }

        //neighborhood[indexCupid] -= 2;

        //if (neighborhood[indexCupid] === 0) {
        //     console.log(`Place ${indexCupid} has Valentine's day.`);
        // }

        //if (neighborhood[indexCupid] < 0) {
        //     console.log(`Place ${indexCupid} already had Valentine's day.`);
        // }


        command = input.shift();
    }


    console.log(`Cupid's last position was ${indexCupid}.`);


    let houseCount = 0;
    for (const house of neighborhood) {
        if (house > 0) {
            houseCount++;
        }
    }

    if (houseCount === 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

//___________________
f2
    (["2@4@2",
        "Jump 1",
        "Jump 3",
        "Jump 2",
        "Jump 3",
        "Jump 1",
        "Love!"
    ])

;