function VetParking(params) {

    let days = Number(params[0]);
    let hours = Number(params[1]);

    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        let dailySum = 0;
        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 === 1) {
                dailySum += 2.50;
            } else if (i % 2 === 1 && j % 2 === 0) {
                dailySum += 1.25;
            } else {
                dailySum += 1;
            }

        }

        console.log(`Day: ${i} - ${dailySum.toFixed(2)} leva`);
        totalSum += dailySum;
    }


    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}