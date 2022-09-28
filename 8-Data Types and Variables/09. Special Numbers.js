function f2(n) {

    for (let i = 1; i <= n; i++) {
        let string = "" + i;
        let sumi = 0;
        for (let j = 0; j < string.length; j++) {
            sumi += Number(string[j]);

        }

        if (sumi === 5 || sumi === 7 || sumi === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);

        }

    }


}

f2(
    20
);



//console.log(`-----------------`);