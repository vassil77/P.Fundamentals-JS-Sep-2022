function f2(params) {
    let maxSumHeight = 30 * params.length;
    let sumHeight = 0;
    for (const iterator of params) {
        sumHeight += iterator;
    }
    dayCounter = 0;
    let totalConcrete = 0;
    let arrayConcrete = [];
    while (sumHeight < maxSumHeight) {
        let dailyConcrete = 0;

        for (let i = 0; i < params.length; i++) {
            params[i]=Number(params[i]);
            if (params[i] < 30) {
                params[i]++;
                dailyConcrete += 195;
            }
        }

        arrayConcrete.push(dailyConcrete);
        totalConcrete += dailyConcrete;
        dayCounter++;
        sumHeight=0;
        for (const iterator of params) {
            sumHeight += iterator;
        }
    }

    console.log(arrayConcrete.join(', '));

   console.log(`${totalConcrete*1900} pesos`);
}

//-----------------
f2(
    [17, 22, 17, 19, 17]
);



//console.log(`-----------------`);