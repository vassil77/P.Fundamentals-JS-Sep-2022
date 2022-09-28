function SimpleCalculator(a, b, operator) {

    let multiply = (a, b) => a * b;

    switch (operator) {
        case "multiply":

            console.log(multiply(a, b));
            break;

        case "divide":
            console.log(a / b);
            break;

        case "add":
            console.log(a + b);
            break;

        case "subtract":
            console.log(a - b);
            break;


    }





}

//-----------------

SimpleCalculator(
    50,
    13,
    'subtract'
);



//console.log(`-----------------`);