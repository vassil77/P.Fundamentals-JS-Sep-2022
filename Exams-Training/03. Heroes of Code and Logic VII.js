function f2(params) {
    let input = params;
    let n = Number(input.shift());

    let heroes = [];

    for (let i = 0; i < n; i++) {
        heroes[i] = input.shift();
        heroes[i] = heroes[i].split(" ");
        heroes[i][1] = Number(heroes[i][1]);
        heroes[i][2] = Number(heroes[i][2]);
    }

    let command = input.shift();

    while (command !== "End") {
        command = command.split(" - ");
        let index;
        let hero;
        let amount;
        switch (command[0]) {
            case "CastSpell":
                hero = command[1];
                let neededMP = command[2];
                let spellName = command[3];
                index = 0;

                for (let i = 0; i < n; i++) {
                    if (hero === heroes[i][0]) {
                        index = i;
                    }
                }
                if (heroes[index][2] >= neededMP) {

                    heroes[index][2] -= neededMP;
                    console.log(`${heroes[index][0]} has successfully cast ${spellName} and now has ${heroes[index][2]} MP!`);
                } else {
                    console.log(`${heroes[index][0]} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case "TakeDamage":
                hero = command[1];
                let damage = command[2];
                let attacker = command[3];
                index = 0;

                for (let i = 0; i < n; i++) {
                    if (hero === heroes[i][0]) {
                        index = i;
                    }
                }
                heroes[index][1] -= damage;

                if (heroes[index][1] > 0) {
                    console.log(`${heroes[index][0]} was hit for ${damage} HP by ${attacker} and now has ${heroes[index][1]} HP left!`);
                } else {
                    console.log(`${heroes[index][0]} has been killed by ${attacker}!`);
                    heroes.splice(index, 1);
                    n--;
                }
                break;


            case "Recharge":
                hero = command[1];
                amount = command[2];
                index = 0;
                for (let i = 0; i < n; i++) {
                    if (hero === heroes[i][0]) {
                        index = i;
                    }
                }
                amount = Math.min(amount, 200 - heroes[index][2]);
                heroes[index][2] += amount;
                console.log(`${hero} recharged for ${amount} MP!`);
                break;


            case "Heal":
                hero = command[1];
                amount = command[2];
                index = 0;
                for (let i = 0; i < n; i++) {
                    if (hero === heroes[i][0]) {
                        index = i;
                    }
                }
                amount = Math.min(amount, 100 - heroes[index][1]);
                heroes[index][1] += amount;
                console.log(`${hero} healed for ${amount} HP!`);
                break;
        }
        command = input.shift();
    }

    for (let i = 0; i < n; i++) {
        console.log(`${heroes[i][0]}
        HP: ${heroes[i][1]}
        MP: ${heroes[i][2]}`);
    }

}

//-----------------
f2([
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
])

;