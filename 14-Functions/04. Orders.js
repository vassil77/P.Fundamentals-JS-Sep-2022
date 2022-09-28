function orders(order, quantity) {

    switch (order) {
        case "coffee":
            console.log((1.50 * quantity).toFixed(2));
            break;

        case "water":
            console.log((1.00 * quantity).toFixed(2));
            break;
        case "coke":
            console.log((1.40 * quantity).toFixed(2));
            break;
        case "snacks":
            console.log((2.00 * quantity).toFixed(2));
            break;


    }


}

//-----------------
orders(
    "coffee", 2
    );



//console.log(`-----------------`);