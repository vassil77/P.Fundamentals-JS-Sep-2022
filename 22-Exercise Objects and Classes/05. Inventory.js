function f2(params) {
    let heroList = [];
    for (let i = 0; i < params.length; i++) {
        let [heroName, heroLevel, items] = params[i].split(' / ');
        let currentHero = {};
        currentHero.heroName = heroName;
        currentHero.heroLevel = heroLevel;
        currentHero.items = items;
        heroList.push(currentHero);
    }

    heroList.sort((a, b) => a.heroLevel - b.heroLevel);

    for (const elem of heroList) {
        console.log(`Hero: ${elem.heroName}`);
        console.log(`level => ${elem.heroLevel}`);
        console.log(`items => ${elem.items}`);

    }

    //console.log(...heroList);

}

//-----------------
f2(
    [
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
);



//console.log(`-----------------`);