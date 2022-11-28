function f2(params) {
    let input = params;
    //Store Initial Info
    let n = input.shift();
    let result = [];

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);
        let isIn = false;

        for (let j = 0; j < i; j++) {
            if (result[j].plant === plant) {

                result[j].rarity = rarity;
                isIn = true;
            }
        }

        if (!isIn) {
            let currentPlant = {
                plant: plant,
                rarity: rarity,
                rating: 0,
                counterRating: 0
            };
            result.push(currentPlant);
        }
    }
    // console.log(...result);//test
    //Execute Commands

    let line = input.shift();

    while (line !== "Exhibition") {
        line = line.split(" ");
        let command = line.shift();
        let plant = line.shift();
        let isValid = false;
        switch (command) {

            case "Rate:":
                let rating = Number(line.pop());
                isValid = false;
                for (let el of result) {
                    if (plant === el.plant) {
                        el.rating += rating;
                        el.counterRating++;
                        isValid = true;
                    }
                }

                if (!isValid) {
                    console.log(`error`);
                }
                break;

            case "Update:":
                let newRarity = Number(line.pop());
                isValid = false;
                for (let el of result) {
                    if (plant === el.plant) {
                        el.rarity = newRarity;
                        isValid = true;
                    }
                }

                if (!isValid) {
                    console.log(`error`);
                }
                break;

            case "Reset:":
                isValid = false;
                for (let el of result) {
                    if (plant === el.plant) {
                        el.rating = 0;
                        el.counterRating = 0;
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
        line = input.shift();
    }

    //Print Result
    console.log(`Plants for the exhibition:`);
    for (let el of result) {
        if (el.rating === 0) {
            console.log(`- ${el.plant}; Rarity: ${el.rarity}; Rating: ${(el.rating).toFixed(2)}`);
        } else {
            console.log(`- ${el.plant}; Rarity: ${el.rarity}; Rating: ${(el.rating/el.counterRating).toFixed(2)}`);
        }
    }

}
//-----------------
f2
    ([
        "3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"
    ])


;