function ThePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let finalHeight = increment;
    let currentBase = base;
    let currentStep = 1;
    let lastBase = 0;

    if (base % 2 === 0) {
        lastBase = 2;
        gold = 4;
    } else {
        lastBase = 1;
        gold = 1;
    }

    while (currentBase > lastBase) {
        if (currentStep % 5 === 0) {
            lapisLazuli += (4 * currentBase - 4);
        } else {
            marble += (4 * currentBase - 4);
        }

        stone += (currentBase*currentBase - (4 * currentBase - 4));

        finalHeight += increment;

        currentBase -= 2;
        currentStep++;
    }

    stone = Math.ceil(stone *= increment);
    marble = Math.ceil(marble *= increment);
    lapisLazuli = Math.ceil(lapisLazuli *= increment);
    gold = Math.ceil(gold *= increment);
    finalHeight = Math.floor(finalHeight);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${finalHeight}`);



}

ThePyramidOfKingDjoser(
    12,
    1
);



//console.log(`-----------------`);