function heroes(input) {
    let heroesCount = Number(input.shift());
    let herosInfo = {};
    for (let i = 0; i < heroesCount; i++) {
        let currentLine = input.shift().split(' ');
        let heroName = currentLine[0];
        let hitPoints = Number(currentLine[1]);
        let manaPoints = Number(currentLine[2]);
        if (!herosInfo.hasOwnProperty(heroName)) {
            herosInfo[heroName] = {
                hitPoints: hitPoints,
                manaPoints: manaPoints,
            };
        }
    }
    let commandsArr = input;
    let index = 0;
    let line = commandsArr[index];
    while (line !== 'End') {
        let currentLine = line.split(' - ');
        let currentCommand = currentLine[0];
        let currentName = currentLine[1];
        let currentPoints = Number(currentLine[2]);
        let attackerName = currentLine[3];
        switch (currentCommand) {
            case 'CastSpell':
                let castName = currentLine[3];
                herosInfo[currentName].manaPoints -= currentPoints;
                if (herosInfo[currentName].manaPoints >= 0) { //>=
                    console.log(`${currentName} has successfully cast ${castName} and now has ${herosInfo[currentName].manaPoints} MP!`);
                } else {
                    console.log(`${currentName} does not have enough MP to cast ${castName}!`);
                    herosInfo[currentName].manaPoints += currentPoints; //New line
                }
                break;
            case 'TakeDamage':
                herosInfo[currentName].hitPoints -= currentPoints;
                if (herosInfo[currentName].hitPoints > 0) {
                    console.log(`${currentName} was hit for ${currentPoints} HP by ${attackerName} and now has ${herosInfo[currentName].hitPoints} HP left!`);
                } else {
                    console.log(`${currentName} has been killed by ${attackerName}!`);
                    delete herosInfo[currentName];
                }
                break;
            case 'Recharge':
                let maxManaPoints = 200;
                if (maxManaPoints >= (herosInfo[currentName].manaPoints + currentPoints)) {
                    herosInfo[currentName].manaPoints += currentPoints;
                    console.log(`${currentName} recharged for ${currentPoints} MP!`);
                } else {
                    let diffManaPoints = maxManaPoints - herosInfo[currentName].manaPoints;
                    console.log(`${currentName} recharged for ${diffManaPoints} MP!`);
                    herosInfo[currentName].manaPoints = 200;
                }
                break;
            case 'Heal':
                let maxHitPoints = 100;
                if (maxHitPoints >= (herosInfo[currentName].hitPoints + currentPoints)) {
                    herosInfo[currentName].hitPoints += currentPoints;
                    console.log(`${currentName} healed for ${currentPoints} HP!`);
                } else {
                    let diffHitPoints = maxHitPoints - herosInfo[currentName].hitPoints;
                    console.log(`${currentName} healed for ${diffHitPoints} HP!`);
                    herosInfo[currentName].hitPoints = 100;
                }
                break;
        }
        index++;
        line = commandsArr[index];
    }
    for (let hero of Object.entries(herosInfo)) {
        let name = hero[0];
        let data = hero[1];
        console.log(name);
        console.log(`  HP: ${data.hitPoints}`);
        console.log(`  MP: ${data.manaPoints}`);
    }

}