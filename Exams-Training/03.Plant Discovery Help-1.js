function discovery(input) {
    let n = Number(input.shift());
    let listPlants = {};

    for (let index = 0; index < n; index++) {
        let currPlant = input.shift();
        let [plant, rarity] = currPlant.split('<->');
        //check if the plant Exist
        if (!listPlants.hasOwnProperty(plant)) {
            listPlants[plant] = {};
            listPlants[plant].Rarity = Number(rarity);
            listPlants[plant].Rating = 0;
            listPlants[plant].RatingCount = 0;
        } else {
            listPlants[plant].Rarity = Number(rarity);
        }
    }

    for (const line of input) {
        if (line.includes('Exhibition')) {
            break;
        } else if (line.includes('Rate')) {
            let splitedLine = line.split('Rate: ');
            let [plantToRate, rating] = splitedLine[1].split(' - ');

            if (listPlants.hasOwnProperty(plantToRate)) {
                listPlants[plantToRate].RatingCount++;
                listPlants[plantToRate].Rating += Number(rating);
            } else {
                console.log('error');
            }

        } else if (line.includes('Update')) {
            let splitedLine = line.split('Update: ');
            let [plantToUpdate, newRarity] = splitedLine[1].split(' - ');

            if (listPlants.hasOwnProperty(plantToUpdate)) {
                listPlants[plantToUpdate].Rarity = Number(newRarity);
            } else {
                console.log('error');
            }
        } else if (line.includes('Reset')) {
            let [splitedLine, plantToReset] = line.split('Reset: ');

            if (listPlants.hasOwnProperty(plantToReset)) {
                listPlants[plantToReset].Rating = 0;
                listPlants[plantToReset].RatingCount = 0;
            }else {
                console.log('error');
            }
        }
    }


    console.log('Plants for the exhibition:');
    for (const plant in listPlants) {
        if (listPlants[plant].Rating === 0) {
            listPlants[plant].Rating = listPlants[plant].Rating.toFixed(2);
        } else {
            listPlants[plant].Rating = (listPlants[plant].Rating / listPlants[plant].RatingCount).toFixed(2);
        }
        delete listPlants[plant].RatingCount;
        console.log(`- ${plant}; Rarity: ${listPlants[plant].Rarity}; Rating: ${listPlants[plant].Rating}`);
    }
}

// JUDGE
discovery
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
        "Exhibition",
        // "Rate: Arnoldii - 3"
    ]);