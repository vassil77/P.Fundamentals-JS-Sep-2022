function Vacation(group, type, day) {

    let totalPrice = 0;
    let singlePrice = 0;
    let discCoeff = 1;

    switch (type) {
        case "Students":
            if (group >= 30) {
                discCoeff = 1 - 0.15;
            }

            switch (day) {
                case "Friday":
                    singlePrice = 8.45;
                    break;
                case "Saturday":
                    singlePrice = 9.80;
                    break;
                case "Sunday":
                    singlePrice = 10.46;
                    break;
            }
            break;

        case "Business":
            if (group >= 100) {
                group -= 10;
            }

            switch (day) {
                case "Friday":
                    singlePrice = 10.90;
                    break;
                case "Saturday":
                    singlePrice = 15.60;
                    break;
                case "Sunday":
                    singlePrice = 16;
                    break;
            }
            break;

        case "Regular":
            if (group >= 10 && group <= 20) {
                discCoeff = 1 - 0.05;
            }

            switch (day) {
                case "Friday":
                    singlePrice = 15;
                    break;
                case "Saturday":
                    singlePrice = 20;
                    break;
                case "Sunday":
                    singlePrice = 22.50;
                    break;
            }
            break;


    }
    totalPrice=group*singlePrice*discCoeff;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);


}

Vacation(
    40,
    "Regular",
    "Saturday"
    );



//console.log(`-----------------`);