function f2(params) {
    let days = Number(params.shift());
    let dailyPlunder = Number(params.shift());
    let expectedPlunder = Number(params.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += 0.50 * dailyPlunder;
        }

        if (i % 5 === 0) {
            totalPlunder -= 0.30 * totalPlunder;
        }

    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(totalPlunder/expectedPlunder*100).toFixed(2)}% of the plunder.`);
    }



}

//-----------------
f2(
    [
        "10",
        "20",
        "380"
    ]
);



//console.log(`-----------------`);