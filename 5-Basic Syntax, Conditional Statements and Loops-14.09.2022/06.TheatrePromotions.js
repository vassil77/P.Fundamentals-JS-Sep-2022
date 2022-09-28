function TheatrePromotions(dayType, age) {
    
    let price_0_18 = [12, 15, 5];
    let price_18_64 = [18, 20, 12];
    let price_64_122 = [12, 15, 10];


    if (0 <= age && age <= 18) {
        switch (dayType) {
            case "Weekday":
                console.log(`${price_0_18[0]}$`);
                break;
            case "Weekend":
                console.log(`${price_0_18[1]}$`);
                break;
            case "Holiday":
                console.log(`${price_0_18[2]}$`);
                break;

            default:
                console.log("Error!");
                break;
        }
    } else if (18 < age && age <= 64) {
        switch (dayType) {
            case "Weekday":
                console.log(`${price_18_64[0]}$`);
                break;
            case "Weekend":
                console.log(`${price_18_64[1]}$`);
                break;
            case "Holiday":
                console.log(`${price_18_64[2]}$`);
                break;

            default:
                console.log("Error!");
                break;
        }
    } else if (64 < age && age <= 122) {
        switch (dayType) {
            case "Weekday":
                console.log(`${price_64_122[0]}$`);
                break;
            case "Weekend":
                console.log(`${price_64_122[1]}$`);
                break;
            case "Holiday":
                console.log(`${price_64_122[2]}$`);
                break;

            default:
                console.log("Error!");
                break;
        }
    } else {
        console.log("Error!");
    }



}

TheatrePromotions(
    'Holiday', 15
);



//console.log(`-----------------`);