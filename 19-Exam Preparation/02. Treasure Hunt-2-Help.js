function solve(array) { // for Help
    let loot = array.shift().split("|");
    //console.log(loot); //test
    let command = array.slice();
    //console.log(command);//test
    let currentRow = [];
    let i = 0;
    let stolen = [];
    while (command[i] !== "Yohoho!") {
        currentRow = command[i].split(" ");

        if (currentRow[0] === "Loot") {

            for (let k = 1; k < currentRow.length; k++) {
                if (!loot.includes(currentRow[k])) {
                    loot.unshift(currentRow[k]);
                }
            }
        }
        //--------------------------------------------------------------------------------------------------------------

        if (currentRow[0] === "Drop" && loot[Number(currentRow[1])] !== undefined) {

            let index = Number(currentRow[1]);

            let drop = loot.splice(index, 1);
            loot.push(drop[0]);
            //loot.push(loot[index]);
            //loot.splice(index, 1);
        }
        //--------------------------------------------------------------------------------------------------------------

        if (currentRow[0] === "Steal") {
            let count = Number(currentRow[1]);
            if (count > loot.length) {
                console.log(loot.join(", ")); // print stolen
                loot = []; //empty loot

                
            } else {
                for (let j = 0; j < count; j++) {
                    stolen[j] = loot.pop();

                }
                console.log(stolen.reverse().join(", ")); //print Stolen
            }
        }
        //console.log(loot); //test
        i++;
    }



    let result = 0;
    for (let n = 0; n < loot.length; n++) {
        result += loot[n].length;
    }
    if (loot.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else if (loot.length > 0) { //loot (instead of stolen)
        console.log(`Average treasure gain: ${(result / loot.length).toFixed(2)} pirate credits.`);
    }


    //console.log(loot);//test
}

//-----------------
solve
    ([
        "Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"
    ])

;