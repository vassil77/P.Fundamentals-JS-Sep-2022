function f2(a) {


    let index = -1;

    for (let i = 0; i < a.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let l = 0; l < i; l++) {
            sumLeft += a[l];
        }

        for (let r = i + 1; r < a.length; r++) {
            sumRight += a[r];
        }

        if (sumLeft === sumRight) {
            index = i;
            console.log(index);
            break;
        }

    }

    if (index === -1) {
        console.log("no");
    }


}

//-----------------
f2(
    [10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]
);



//console.log(`-----------------`);