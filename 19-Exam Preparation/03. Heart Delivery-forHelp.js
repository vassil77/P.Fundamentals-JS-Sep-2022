function heartDelivery(params) {
    let arr=params;
    let neighbourHood = arr.shift().split("@").map(Number);
    let line = arr.shift();
    let houseIndex = 0;

    while (line !== "Love!") {
        //let [_, length] =
        line = line.split(" ");
        length = Number(line[1]);
        //console.log(length); //test
        houseIndex += length;

        if (houseIndex >= neighbourHood.length) {
            houseIndex = 0;
        }

        if (neighbourHood[houseIndex] === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {
            neighbourHood[houseIndex] -= 2;

            if (neighbourHood[houseIndex] === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }
        }


        line = arr.shift();
    }

    console.log(`Cupid's last position was ${houseIndex}.`);

    let failCounter = 0;
    for (const house of neighbourHood) {
        if (house > 0) {
            failCounter++;
        }
    }

    if (failCounter === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failCounter} places.`);
    }
}



heartDelivery
    (["2@4@2",
        "Jump 1",
        "Jump 3",
        "Jump 2",
        "Jump 3",
        "Jump 1",
        "Love!"
    ])

;