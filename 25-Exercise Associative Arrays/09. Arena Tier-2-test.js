function f2(params) {
    let line = params.shift();
    let pool = {};
    while (line !== 'Ave Cesar') {
        if (line.split(' vs ').length > 1) { //vs Fight
            let [gladiator1, gladiator2] = line.split(' vs ');
            if (pool.hasOwnProperty(gladiator1) && pool.hasOwnProperty(gladiator2)) {
                let hasCommon = false;
                let commonTech;
                for (let technique1 in pool[gladiator1][0]) {
                    for (let technique2 in pool[gladiator2][0]) {
                        if (technique1 === technique2) {
                            hasCommon = true;
                            commonTech = technique1;
                            break;
                        }
                    }

                    if (hasCommon) {
                        break;
                    }
                }

                if (hasCommon) {
                    if (pool[gladiator1][0][commonTech] < pool[gladiator2][0][commonTech]) {
                        delete pool[gladiator1];

                    } else if (pool[gladiator2][0][commonTech] < pool[gladiator1][0][commonTech]) {
                        delete pool[gladiator2];
                    }
                }
            }
        } else { //-> Enter
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (pool.hasOwnProperty(gladiator)) {
                if (pool[gladiator][0].hasOwnProperty(technique)) {
                    let oldSkill = pool[gladiator][0][technique];
                    let newSkill = Math.max(skill, oldSkill);
                    pool[gladiator][0][technique] = newSkill;
                    pool[gladiator][1] += (newSkill - oldSkill);
                } else {
                    pool[gladiator][0][technique] = skill;
                    pool[gladiator][1] += skill;
                }
            } else {
                pool[gladiator] = [];
                pool[gladiator][0] = {};
                pool[gladiator][0][technique] = skill;
                pool[gladiator][1] = skill;
            }
        }
        line = params.shift();
    }

    let entries = Object.entries(pool);
    entries = entries.sort((a, b) => b[1][1] - a[1][1] || a[0].localeCompare(b[0])); //order by Name
    // entries = entries.sort((a, b) => b[1][1] - a[1][1]); //order by total Skill


    for (const el of entries) {
        let techniqueEntries = Object.entries(el[1][0]);
        techniqueEntries = techniqueEntries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])); //order by technique
        // techniqueEntries = techniqueEntries.sort((a, b) => b[1] - a[1]); //order by Skill

        el[1][0] = Object.fromEntries(techniqueEntries);
    }

    pool = Object.fromEntries(entries);

    for (const gladiator in pool) {
        console.log(`${gladiator}: ${pool[gladiator][1]} skill`);
        for (const technique in pool[gladiator][0]) {
            console.log(`- ${technique} <!> ${pool[gladiator][0][technique]}`);
        }
    }
}

//-----------------
f2(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
);



//console.log(`-----------------`);