function MemoryGame(params) {

    let i = 0;
    let sequenceSpace = params[i++];

    let sequence = "";
    for (let l = 0; l < sequenceSpace.length; l += 2) {
        sequence += sequenceSpace[l];
    }

    let command = params[i++];
    let moves = 0;

    while (command !== "end") {
        moves++;

        let j = 0;
        let k = 0;
        if (command[0] === "-") {
            j = -Number(command[1]);
            k = Number(command[3]);
        } else {
            j = Number(command[0]);
            k = Number(command[2]);
        }

        if (j === k || j < 0 || k < 0 || j >= sequence.length || k >= sequence.length) { // Cheat  Invalid! Adding Elements

            console.log("Invalid input! Adding additional elements to the board");




        } else if (sequence[j] === sequence[k]) { //  Match
            console.log(`Congrats! You have found matching elements - ${(sequence[j])}!`);

            let newSequence = "";
            for (let l = 0; l < sequence.length; l ++) {
                if (l!==j) {
                    newSequence += sequence[l];
                }
            }
            sequence=newSequence;
            
        } else { // Diffrent
            console.log("Try again!");
        }





        command = params[i++];
    }



}

MemoryGame
    (

        [
            "1 1 2 2 3 3 4 4 5 5",
            "1 0",
            "-1 0",
            "1 0",
            "1 0",
            "1 0",
            "end"
        ]

    )



;



//console.log(`-----------------`);