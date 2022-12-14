function discovery(input) {
    let numberOfPlantsToAdd = Number(input.shift());
    let discoveredPlants = {};
    for (let index = 0; index < numberOfPlantsToAdd; index++) {
        let currPlant = input.shift();
        let [plant, rarity] = currPlant.split('<->');
        discoveredPlants[plant] = {};
        discoveredPlants[plant].Rarity = Number(rarity);
        discoveredPlants[plant].Rating = 0;
        discoveredPlants[plant].RatingCount = 0;
    }
    for (const line of input) {
        if (line.includes('Exhibition')) {
            break;
        } else if (line.includes('Rate')) {
            let splitedLine = line.split('Rate: ');
            let [plantToRate, rating] = splitedLine[1].split(' - ');
            if (discoveredPlants.hasOwnProperty(plantToRate)) {
                discoveredPlants[plantToRate].RatingCount++;
                discoveredPlants[plantToRate].Rating += Number(rating);
            } else {
                console.log('error');
            }
        } else if (line.includes('Update')) {
            let splitedLine = line.split('Update: ');
            let [plantToUpdate, newRarity] = splitedLine[1].split(' - ');
            if (discoveredPlants.hasOwnProperty(plantToUpdate)) {
                discoveredPlants[plantToUpdate].Rarity = Number(newRarity);
            } else {
                console.log('error');
            }
        } else if (line.includes('Reset')) {
            let [splitedLine, plantToReset] = line.split('Reset: ');
            if (discoveredPlants.hasOwnProperty(plantToReset)) {
                discoveredPlants[plantToReset].Rating = 0;
                discoveredPlants[plantToReset].RatingCount = 0;
            } else {
                console.log('error');
            }
        }
    }
    console.log('Plants for the exhibition:');
    for (const plant in discoveredPlants) {
        if (discoveredPlants[plant].Rating === 0) {
            discoveredPlants[plant].Rating = discoveredPlants[plant].Rating.toFixed(2);
        } else {
            discoveredPlants[plant].Rating = (discoveredPlants[plant].Rating / discoveredPlants[plant].RatingCount).toFixed(2);
        }
        delete discoveredPlants[plant].RatingCount;
        console.log(`- ${plant}; Rarity: ${discoveredPlants[plant].Rarity}; Rating: ${discoveredPlants[plant].Rating}`);
    }
}

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

    ]);