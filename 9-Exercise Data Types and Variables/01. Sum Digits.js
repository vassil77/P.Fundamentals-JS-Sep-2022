function f2(num) {

    let numString = "" + num;
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }

    console.log(sum);

}

f2(
    97561
);



//console.log(`-----------------`);