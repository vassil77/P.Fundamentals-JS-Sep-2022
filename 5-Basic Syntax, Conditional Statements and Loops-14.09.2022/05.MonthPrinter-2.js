function MonthPrinter(m) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (1 <= m && m <= 12) {
        console.log(month[m - 1]);
    } else {
        console.log("Error!");
    }





}


MonthPrinter(2);


//console.log(`-----------------`);