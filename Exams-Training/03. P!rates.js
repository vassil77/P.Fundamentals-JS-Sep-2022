function f2(params) {
    let input = params;
    let targets = [];

    let command = input.shift();

    while (command !== "Sail") {
        command = command.split("||");
        let town = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);
        let currentTarget = {
            town: town,
            population: population,
            gold: gold
        };
        //console.log(currentTarget); //test
        let index;
        let isAlreadyIn = false;
        for (let i = 0; i < targets.length; i++) {
            if (currentTarget.town === targets[i].town) {
                isAlreadyIn = true;
                index = i;
            }
        }

        if (isAlreadyIn) {
            targets[index].population += currentTarget.population;
            targets[index].gold += currentTarget.gold;
        } else {
            targets.push(currentTarget);
        }

        command = input.shift();
    }
    //for (let i = 0; i < targets.length; i++) {    //test
    //      console.log(targets[i]);
    // }



    while (command !== "End") {
        command = command.split("=>");
        let town;
        let people;
        let gold;
        switch (command[0]) {

            case "Plunder":
                town = command[1];
                people = Number(command[2]);
                gold = Number(command[3]);

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                for (let i = 0; i < targets.length; i++) {
                    if (targets[i].town === town) {
                        targets[i].population -= people;
                        targets[i].gold -= gold;

                        if (targets[i].population === 0 || targets[i].gold === 0) {
                            targets.splice(i, 1);
                            console.log(`${town} has been wiped off the map!`);
                        }
                    }
                }
                break;


            case "Prosper":
                town = command[1];
                gold = Number(command[2]);
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    for (let i = 0; i < targets.length; i++) {
                        if (targets[i].town === town) {
                            targets[i].gold += gold;
                            console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[i].gold} gold.`);
                        }
                    }
                }

                break;

        }
        command = input.shift();
    }

    if (targets.length > 0) {
        console.log(`Ahoy, Captain! There are ${targets.length} wealthy settlements to go to:`);

        for (let i = 0; i < targets.length; i++) {
            console.log(`${targets[i].town} -> Population: ${targets[i].population} citizens, Gold: ${targets[i].gold} kg`);

        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

}

//-----------------
f2

(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

;


//-----------------
//   input=params;