function f2(a, operator, b) {

    switch (operator) {
        case "+":
            console.log((a + b).toFixed(2));
            break;

        case "-":
            console.log((a - b).toFixed(2));
            break;
        case "/":
            console.log((a / b).toFixed(2));
            break;
        case "*":
            console.log((a * b).toFixed(2));
            break;

    }


}

f2(
    25.5,
    '-',
    3
);



//console.log(`-----------------`);