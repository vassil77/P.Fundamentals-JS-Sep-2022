function f2(lostF, helmetP, swordP, shieldP, armorP) {

    let expenses = 0;

    for (let i = 1; i <= lostF; i++) {
        if (i % 2 === 0) {
            expenses += helmetP;
        }

        if (i % 3 === 0) {
            expenses += swordP;
        }

        if (i % 6 === 0) {
            expenses += shieldP;
        }

        if (i % 12 === 0) {
            expenses += armorP;
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

f2(
    23,
    12.50,
    21.50,
    40,
    200
);



//console.log(`-----------------`);