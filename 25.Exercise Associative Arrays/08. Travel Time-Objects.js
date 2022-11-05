function f2(params) {

    let offers = {};

    for (const line of params) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);
        if (offers.hasOwnProperty(country)) {
            let isTownIn = false;
            for (let i = 0; i < offers[country].length; i++) {
                let townIn = offers[country][i][0];
                let costIn = Number(offers[country][i][1]);
                if (town === townIn) {
                    offers[country][i][1] = Math.min(cost, costIn);

                    isTownIn = true;
                }
            }
            if (!isTownIn) {
                offers[country].push([town, cost]);
            }
        } else {
            offers[country] = [
                [town, cost]
            ];
        }
    }


    let entries = Object.entries(offers).sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(...entries);
    for (let country of entries) {
        country[1].sort((a, b) => a[1] - b[1]);
    }

    for (let [key, value] of entries) {
        let printString = '';
        for (let iterator of value) {
            printString += iterator.join(' -> ') + " ";
        }
        console.log(`${key} -> ${printString}`);
    }


}

//-----------------
f2(
    [
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Varna > 25010',
        'Bulgaria > Lukovit > 10'
    ]
);



//console.log(`-----------------`);