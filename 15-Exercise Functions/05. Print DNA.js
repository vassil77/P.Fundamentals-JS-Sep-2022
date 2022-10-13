function f2(params) {
    let n = params;
    let array = 'ATCGTTAGGG'.split('');
    let deltaStar = 1;
    let deltaDash = -1;
    let star = 2;
    let dash = 0;
    let letter1;
    let letter2;
    let result;

    for (let i = 1; i <= n; i++) {
        let stringStar = '';
        for (let j = 0; j < star; j++) {
            stringStar += '*';
        }

        let stringDash = '';
        for (let k = 0; k < dash; k++) {
            stringDash += '--';
        }

        letter1=array.shift();
        array.push(letter1);
        letter2=array.shift();
        array.push(letter2);

        result=stringStar+letter1+stringDash+letter2+stringStar;
        console.log(result);


        if (i%2===1) {
            deltaStar=-deltaStar;
            deltaDash=-deltaDash;
        }
        star+=deltaStar;
        dash+=deltaDash;


    }



   // console.log(array);
}

//-----------------
f2(
    4
);



//console.log(`-----------------`);