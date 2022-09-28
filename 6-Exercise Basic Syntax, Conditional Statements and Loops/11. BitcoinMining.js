function BitcoinMining(params) {


    let money = 0;
    let totalBitcoins = 0;
    let dayFirst = 0;

    for (let i = 1; i <= params.length; i++) {
        
        if (i % 3 === 0) {
            money += params[i - 1] * 67.51*(1-0.30);
        }else {
            money += params[i - 1] * 67.51;
        }

        currentBitcoins = Math.floor(money / 11949.16);
        money -= currentBitcoins * 11949.16;

        if (currentBitcoins >= 1 && totalBitcoins === 0) {
            dayFirst = i;
        }

        totalBitcoins += currentBitcoins;

    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (totalBitcoins>0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirst}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}



BitcoinMining(
    [3124.15, 504.212, 2511.124]
        );



//console.log(`-----------------`);