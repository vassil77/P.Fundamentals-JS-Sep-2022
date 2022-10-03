function f2(params) {
    let input = params;
    let n = input.shift();
    const result = [];

    result[0] = {
        plant: "",
        rarity: 0,
        rating: 0,
        counterRating: 0
    };

    for (let i = 0; i < n; i++) {
        let buffer = (input.shift()).split("<->");
        let isIn = false;

        for (let j = 0; j < i; j++) {
            if (result[j].plant === buffer[0]) {
                result[j].rarity = Number(buffer[1]);
                isIn = true;
            }
        }

        if (isIn) {
            n--;
        }

        if (!isIn) {
            result[i] = {
                plant: "",
                rarity: 0,
                rating: 0,
                counterRating: 0
            };
            result[i].plant = buffer[0];
            result[i].rarity = Number(buffer[1]);
        }
    }

    // for (let i = 0; i < n; i++) {
    //     console.log(result[i]);
    //}



    let command = input.shift();
    while (command !== "Exhibition") {
        command = command.split(" ");
        let isValid = false;
        switch (command[0]) {
            case "Rate:":
                isValid = false;
                for (let i = 0; i < n; i++) {
                    if (command[1] === result[i].plant) {
                        result[i].rating += Number(command[3]);
                        result[i].counterRating++;
                        isValid = true;
                    }
                }

                if (!isValid) {
                    console.log(`error`);
                }
                break;

            case "Update:":
                isValid = false;
                for (let i = 0; i < n; i++) {
                    if (command[1] === result[i].plant) {
                        result[i].rarity = Number(command[3]);
                        isValid = true;
                    }
                }

                if (!isValid) {
                    console.log(`error`);
                }
                break;

            case "Reset:":
                isValid = false;
                for (let i = 0; i < n; i++) {
                    if (command[1] === result[i].plant) {
                        result[i].rating = 0;
                        result[i].counterRating = 0;
                        isValid = true;
                    }
                }

                if (!isValid) {
                    console.log(`error`);
                }

                break;

            default:
                console.log(`error`);
                break;
        }
        command = input.shift();
    }



    console.log(`Plants for the exhibition:`);
    for (let i = 0; i < n; i++) {
        if (result[i].rating === 0) {
            console.log(`- ${result[i].plant}; Rarity: ${result[i].rarity}; Rating: ${(result[i].rating).toFixed(2)}`);
        } else {
            console.log(`- ${result[i].plant}; Rarity: ${result[i].rarity}; Rating: ${(result[i].rating/result[i].counterRating).toFixed(2)}`);
        }
    }

}
//-----------------
f2
(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: wrong - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])


;