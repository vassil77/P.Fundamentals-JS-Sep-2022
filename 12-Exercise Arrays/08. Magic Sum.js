function f2(a, num) {

    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            if (a[i]+a[j]===num) {
                console.log(a[i]+" "+a[j]);
            }
        }

    }


}

//-----------------
f2(
    [1, 2, 3, 4, 5, 6],
6
);



//console.log(`-----------------`);