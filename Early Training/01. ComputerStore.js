function ComputerStore(params) {

    let i = 0;
    let command = params[i++];

    let price = 0;
    let taxes = 0;
    let totalPrice = 0;
    let type = params[params.length - 1];



    while (command !== "special" && command !== "regular") {
        let partPrice = Number(command);

        if (partPrice <= 0) {
            console.log("Invalid price!");

        } else {
            price += partPrice;
        }


        command = params[i++];
    }

    taxes = 0.20 * price;
    totalPrice = price + taxes;

    if (type === "special") {
        totalPrice *= (1 - 0.10);
    }

    if (price === 0) {
        console.log("Invalid order!");
    } else {

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);



    }



}

ComputerStore

    ([
        'regular'
    ])



;




//console.log(`-----------------`);