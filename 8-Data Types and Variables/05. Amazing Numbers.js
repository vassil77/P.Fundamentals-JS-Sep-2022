function f2(num) {

    let string = "" + num;
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);

    }
    sum += "";
    if (sum.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}

f2(
    999
);



//console.log(`-----------------`);