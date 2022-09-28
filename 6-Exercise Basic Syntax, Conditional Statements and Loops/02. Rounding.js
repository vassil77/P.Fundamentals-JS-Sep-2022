function Rounding(num, precision) {

    precision = Math.min(precision, 15);

    console.log(parseFloat(num.toFixed(precision)));


}

Rounding(10.5, 3);



//console.log(`-----------------`);