function formatGrade(params) {

    if (params < 3) {
        console.log(`Fail (${Math.floor(params)})`);
    } else if (3 <= params && params < 3.50) {
        console.log(`Poor (${params.toFixed(2)})`);

    } else if (3.50 <= params && params < 4.50) {
        console.log(`Good (${params.toFixed(2)})`);

    } else if (4.50 <= params && params < 5.50) {
        console.log(`Very good (${params.toFixed(2)})`);

    } else {
        console.log(`Excellent (${params.toFixed(2)})`);

    }




}

//-----------------
formatGrade(
    2.99
);



//console.log(`-----------------`);