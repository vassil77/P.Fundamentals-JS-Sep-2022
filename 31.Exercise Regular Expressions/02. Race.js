function f2(params) {
    let racers = params.shift().split(', ');
    let listRacers = {};
    for (const racer of racers) {
        listRacers[racer] = 0;
    }

    let line = params.shift();

    while (line !== 'end of race') {
        let regexpLetters = /[A-Za-z]/g;
        let candidate = line.match(regexpLetters).join('');

        let regexpKm = /[0-9]/g;
        let digits = line.match(regexpKm).map(Number);
        let km = 0;
        for (const digit of digits) {
            km += digit;
        }

        if (listRacers.hasOwnProperty(candidate)) {
            listRacers[candidate] += km;
        }

        // console.log(listRacers);
        line = params.shift();
    }

    let sorted = Object.entries(listRacers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

    // console.log(...sorted);
}

//Judge__________________
f2(
    ['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);