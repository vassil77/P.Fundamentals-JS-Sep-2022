function f2(params) {
    let pirateStatus = params.shift().split('>').map(Number);
    let warshipStatus = params.shift().split('>').map(Number);
    let healthCapacity = Number(params.shift());
    let commandLine = params.shift();
    let isWarOver = false;

    while (commandLine !== 'Retire') {
        let command = commandLine.split(' ');
        let index;
        let damage;
        let health;
        switch (command[0]) {
            case 'Fire':
                command.shift();
                index = Number(command.shift());
                damage = Number(command.shift());
                if (warshipStatus[index] !== undefined) {
                    warshipStatus[index] -= damage;
                    if (warshipStatus[index] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        isWarOver = true;
                        break;
                    }
                }
                break;


            case 'Defend':
                command.shift();
                startIndex = Number(command.shift());
                endIndex = Number(command.shift());
                damage = Number(command.shift());

                if (pirateStatus[startIndex] !== undefined && pirateStatus[endIndex] !== undefined) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateStatus[i] -= damage;

                        if (pirateStatus[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            isWarOver = true;
                            break;
                        }
                    }
                }

                break;


            case 'Repair':
                command.shift();
                index = Number(command.shift());
                health = Number(command.shift());

                if (pirateStatus[index] !== undefined) {
                    pirateStatus[index] = Math.min(pirateStatus[index] + health, healthCapacity);
                }

                break;


            case 'Status':
                let count = 0;
                for (let i = 0; i < pirateStatus.length; i++) {
                    if (pirateStatus[i] < 0.20 * healthCapacity) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;


        }
        if (isWarOver) {
            break;
        }
        commandLine = params.shift();
    }
    let pirateShipSum = 0;
    for (const iterator of pirateStatus) {
        pirateShipSum += iterator;
    }

    let warshipSum = 0;
    for (const iterator of warshipStatus) {
        warshipSum += iterator;
    }


    if (!isWarOver) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

}

//-----------------
f2
    ([
        "2>3>4>5>2",
        "6>7>8>9>10>11",
        "20",
        "Status",
        "Fire 2 3",
        "Defend 0 4 11",
        "Repair 3 18",
        "Retire"
    ]);



//console.log(`-----------------`);