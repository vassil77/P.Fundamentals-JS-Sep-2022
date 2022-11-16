function f2(params) {
    let n = Number(params.shift());
    let listAttacked = [];
    let listDestroyed = [];

    for (let i = 0; i < n; i++) {
        let text = params.shift();
        // console.log(text);
        let patternLetters = /[starSTAR]/gi;
        let letters = text.match(patternLetters);
        if (letters !== null) {
            key = letters.length;
        } else {
            key = 0;
        }
        // let key = text.match(patternLetters) && text.match(patternLetters).length;

        // console.log(key); // test
        text = text.split('');
        for (let i = 0; i < text.length; i++) {
            text[i] = String.fromCharCode(text[i].charCodeAt() - key);
        }
        text = text.join(''); //decoded Text

        let pattern = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attack>[AD]{1})![^@:!\->]*\->(?<souldiers>\d+)/g;
        //            /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attack>[A|D])![^@:!\->]*\->(?<souldiers>\d+)/g;

        let planetInfo;
        if ((planetInfo = pattern.exec(text))) {
            // let {
            //     planet,
            //     population,
            //     attack,
            //     souldiers
            // } = planetInfo.groups;
            let planet = planetInfo.groups.planet;
            let attack = planetInfo.groups.attack;

            if (attack === "A") {
                listAttacked.push(planet);
            } else if (attack === "D") {
                listDestroyed.push(planet);
            }
        }
    }

    listAttacked.sort((a, b) => a.localeCompare(b));
    listDestroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${listAttacked.length}`);
    for (const planet of listAttacked) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${listDestroyed.length}`);
    for (const planet of listDestroyed) {
        console.log(`-> ${planet}`);
    }
}

//Judge__________________
f2(
    ['4',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        'GQhrr|A977777(H(TTTT',
        'EHfsytsnhf?8555&I&2C9555SR',
        'EHfPyPPnhf?8555&I&2C9555PP'
    ]
);