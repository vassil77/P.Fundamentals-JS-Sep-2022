function f2(params) {
    let input = params;
    let neighborhood = input.shift();
    neighborhood = neighborhood.split("@");
    for (let i = 0; i < neighborhood.length; i++) {
        neighborhood[i] = Number(neighborhood[i]);
    }

    let command = input.shift();
    let indexCupid = 0;


    while (command !== "Love!") {
        command = command.split(" ");
        let length = Number(command[1]);
        indexCupid += length;
        if (indexCupid>=neighborhood.length) {
            indexCupid = 0;
        }
        neighborhood[indexCupid] -= 2;

        if (neighborhood[indexCupid]===0) {
            console.log(`Place ${indexCupid} has Valentine's day.`);
        }

        if (neighborhood[indexCupid]<0) {
            console.log(`Place ${indexCupid} already had Valentine's day.`);
        }


        command = input.shift();
    }


    console.log(`Cupid's last position was ${indexCupid}.`);
    let isSuccessful = true;
    let houseCount=0;
    for (let j = 0; j < neighborhood.length; j++) {
        if (neighborhood[j]>0) {
            isSuccessful=false;
            houseCount++;
        }
    }
   
    if (isSuccessful) {
        console.log(`Mission was successful.`);
    }else{
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

//-----------------
f2
(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

;