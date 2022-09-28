function f2(startingYield) {

    let yield = startingYield;
    let totalAmount = 0;
    let dayCounter = 0;

    while (yield >= 100) {
        totalAmount += yield - 26;
        yield -= 10;
        dayCounter++;

    }

    totalAmount=Math.max(0,totalAmount-26);
    console.log(dayCounter);
    console.log(totalAmount);
}




f2(
    2
);



//console.log(`-----------------`);