function f2(params) {
    function calculateCardValue(input) {
        let cardArray = Array.from(input);
        let sum = 0;
        for (const iterator of cardArray) {
            let power;
            let type;
            if (iterator[0] === "1") {
                power = 10;
                type = iterator[2];
            } else {

                [power, type] = iterator.split('');
            }

            switch (power) {
                case "J":
                    power = 11;
                    break;
                case "Q":
                    power = 12;
                    break;
                case "K":
                    power = 13;
                    break;
                case "A":
                    power = 14;
                    break;

                default:
                    power = Number(power);
                    break;
            }

            switch (type) {
                case "S":
                    type = 4;
                    break;

                case "H":
                    type = 3;
                    break;

                case "D":
                    type = 2;
                    break;

                case "C":
                    type = 1;
                    break;


            }

            sum += power * type;
            // console.log(`${power} x ${type}`);
        }
        // console.log(sum);
        return sum;
    }

    let players = new Map();
    for (let line of params) {
        let cards = new Set();
        let [name, cardString] = line.split(': ');
        cardArray = cardString.split(', ');
        for (const iterator of cardArray) {
            cards.add(iterator);
        }
        // console.log(cards); //test

        if (players.has(name)) {
            let cardSet = players.get(name);
            for (let iterator of cards) {
                cardSet.add(iterator);
            }
            players.set(name, cardSet);
        } else {
            players.set(name, cards);
        }
    }

    for (let [key, value] of players) {
        console.log(`${key}: ${calculateCardValue(value)}`);
    }

    // console.log(calculateCardValue(players.get('Tomas')));

}
//-----------------
f2(
    [
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
);



//console.log(`-----------------`);