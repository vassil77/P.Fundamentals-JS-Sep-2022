function solve(arr) {
    let list = {};
    for (let el of arr) {
        if (el === 'Ave Cesar') {
            break;
        } else if (el.includes(' -> ')) {        //Enter
            add(el);
        } else if (el.includes(' vs ')) {
            battle(el);                         //Battle
        }
    }

    let tier = Object.entries(list);
    let array = [];

    for (let elem of tier) {
        let name = elem[0];
        let pow = Object.entries(elem[1]);
        let sum = pow.map(a => a[1]).reduce((a, b) => a + b);
        array.push([name, pow, sum]);
    }

    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));  // Sorting

    for (let part of array) {
        console.log(`${part[0]}: ${part[2]} skill`);
        part[1]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));    // Sorting
            // .map(x => console.log(`- ${x[0]} <!> ${x[1]}`));           // Printing
    }

    function add(el) {
        let [gladiator, skill, power] = el.split(' -> ');
        power = Number(power);
        if (!list.hasOwnProperty(gladiator)) {
            list[gladiator] = {};
            list[gladiator][skill] = power;
        } else {
            if (!list[gladiator].hasOwnProperty(skill)) {  //  ???
                list[gladiator][skill] = power;
                // console.log(`Attention!!!`); //test
                // console.log(list);
            } else {
                let oldPow = list[gladiator][skill];
                if (power > oldPow) {
                    list[gladiator][skill] = power;
                }
            }
        }
    }

    function battle(el) {
        let [gladiatorA, gladiatorB] = el.split(' vs ');
        if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
            let skillA = list[gladiatorA];
            let skillB = list[gladiatorB];
            // console.log(skillA);
            // console.log(skillB);
            for (let elA in skillA) {
                for (let elB in skillB) {
                    if (elA === elB) {
                        if (skillA[elA] > skillB[elB]) {
                            delete list[gladiatorB];
                            console.log(`winner is ${gladiatorA}`);
                        } else if (skillA[elA] < skillB[elB]) {
                            delete list[gladiatorA];
                            console.log(`winner is ${gladiatorB}`);
                        }
                    }
                }
            }
        }
    }
}


//-----------------
solve(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 250',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
);