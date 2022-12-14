function f2(params) {
    let n = Number(params.shift());
    let regexp = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;

    for (let i = 0; i < n; i++) {
        let text = params.shift();
        // console.log(text);
        let matches = text.match(regexp);
        // console.log(matches);
        if (matches && matches.length === 1) {
            let firstMatch = regexp.exec(text);
            let boss = firstMatch.groups.boss;
            let title = firstMatch.groups.title;
            console.log(`${boss}, The ${title}
            >> Strength: ${boss.length}
            >> Armor: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

// JUDGE
f2
    ([
        '3',
        '|PETER|:#Lead architect#',
        '|GEORGE|:#High Overseer#',
        '|ALEX|:#Assistant Game Developer#'
    ]);