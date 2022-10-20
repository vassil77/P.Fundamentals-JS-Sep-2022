function f2(params) {
    let loot = params.shift().split('|');
    //console.log(loot); //test
    let commandLine = params.shift();

    while (commandLine !== 'Yohoho!') {
        commandLine = commandLine.split(' ');
        switch (commandLine[0]) {
            case 'Loot':
                commandLine.shift();
                for (let i =0; i < commandLine.length; i++) {
                    if (!loot.includes(commandLine[i])) {
                        loot.unshift(commandLine[i]);
                    }
                }
                //console.log(loot); //test
                break;


            case 'Drop':
                commandLine.shift();
                let index = Number(commandLine.shift());
                if (loot[index] !== undefined) {
                    let drop = loot.splice(index, 1);
                    loot.push(drop[0]);
                }
                //console.log(loot); //test

                break;


            case 'Steal':
                commandLine.shift();
                let count = Number(commandLine.shift());
                let stolen = [];
                if (count <= loot.length) {
                    for (let i = 0; i < count; i++) {
                        stolen.unshift(loot.pop());
                    }
                } else {
                    stolen = loot.splice(0);
                }
                console.log(stolen.join(', '));

                break;


        }
        commandLine = params.shift();
    }

    if (loot.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sum = 0;
        for (const iterator of loot) {
            sum += iterator.length;
        }
        let averageGain = sum / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }


}

//-----------------
f2
    ([
        "Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 6",
        "Yohoho!"
    ])

;



//console.log(`-----------------`);