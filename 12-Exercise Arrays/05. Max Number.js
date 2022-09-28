function f2(a) {
    let out = "";
    for (let i = 0; i < a.length; i++) {
        let isTopInt = true;
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] <= a[j]) {
                isTopInt = false;
            }

        }
        if (isTopInt) {
            out += a[i] + " ";
        }


    }

    console.log(out);


}

//-----------------
f2(
    [1, 4, 3, 2]
);



//console.log(`-----------------`);