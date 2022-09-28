function IntegerandFloat(a1, a2, a3) {

    let sum = a1 + a2 + a3;

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }


}

IntegerandFloat(
    100, 200, 303
);



//console.log(`-----------------`);