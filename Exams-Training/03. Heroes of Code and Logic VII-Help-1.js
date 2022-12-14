function heroes(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, HP, MP] = input.shift().split(" ");
        HP = Number(HP);
        MP = Number(MP);
        if (!heroes.hasOwnProperty(name)) {
            heroes[name] = {
                HP,
                MP
            };
        }
    }

    let command = input.shift();

    while (command !== 'End') {
        command = command.split(' - ');
        let currentCommand = command[0];
        let name = command[1];
        let amount;
        switch (currentCommand) {
            case 'CastSpell':
                let neededMP = Number(command[2]);
                let spellName = command[3];

                if (heroes[name].MP >= neededMP) {
                    heroes[name].MP -= neededMP; 
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].MP} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                // console.log(currentLine[2]);//test
                amount = Number(command[2]);
                // console.log(currentPoints);//test
                let attackerName = command[3];
                heroes[name].HP -= amount;

                if (heroes[name].HP > 0) {
                    console.log(`${name} was hit for ${amount} HP by ${attackerName} and now has ${heroes[name].HP} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attackerName}!`);
                    delete heroes[name];
                }
                // console.table(herosInfo);//test
                break;

            case 'Recharge':
                // console.log(currentLine[2]);//test
                amount = Number(command[2]);
                // console.log(currentPoints);//test
                amount = Math.min(amount, 200 - heroes[name].MP);
                heroes[name].MP += amount;
                console.log(`${name} recharged for ${amount} MP!`);
                break;

            case 'Heal':
                // console.log(currentLine[2]);//test
                amount = Number(command[2]);
                // console.log(currentPoints);//test
                amount = Math.min(amount, 100 - heroes[name].HP);
                heroes[name].HP += amount;
                console.log(`${name} healed for ${amount} HP!`);
                break;
        }
        command = input.shift();
    }

    for (const hero in heroes) {
        console.log(`${hero}
    HP: ${heroes[hero].HP}
    MP: ${heroes[hero].MP}`);
    }

}


heroes([
    4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);