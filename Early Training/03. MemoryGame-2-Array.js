function MemoryGame(params) {

    let i = 0;
    let seqSpace = params[i++];
    const seqArray = seqSpace.split(" ");

    let command = params[i++];
    let moves = 0;

    while (command !== "end") {
        moves++;
        const hit = command.split(" ");

        let j = Math.min(hit[0], hit[1]);
        let k = Math.max(hit[0], hit[1]);

        if (j === k || j < 0 || k < 0 || j >= seqArray.length || k >= seqArray.length) { // Invalid! + Adding Elements

            console.log("Invalid input! Adding additional elements to the board");

            seqArray.splice(seqArray.length / 2, 0, `-${moves}a`, `-${moves}a`);

        } else if (seqArray[j] === seqArray[k]) { //  Match - Remove Matching 

            console.log(`Congrats! You have found matching elements - ${(seqArray[j])}!`);

            seqArray.splice(j, 1);
            seqArray.splice(k - 1, 1);

        } else { // Diffrent
            console.log("Try again!");
        }

        let seqSpaceEnd = seqArray.join("");

        if (seqSpaceEnd === "") {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        command = params[i++];
    }

    let seqSpaceFinal = seqArray.join(" ");

    if (command === "end") {
        console.log("Sorry you lose :(");
        console.log(seqSpaceFinal);
    }


}

MemoryGame
    (

        [
            "a 2 4 a 2 4", 
            "4 0", 
            "0 2",
            "0 1",
            "0 1", 
            "end"
            ]

    )



;



//console.log(`-----------------`);