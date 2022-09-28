function f2(a, n) {

    for (let i = 1; i <= n; i++) {
        let end = a[0];
        for (let j = 0; j < a.length - 1; j++) {
            a[j] = a[j + 1];
        }
        a[a.length - 1] = end;
    }
    let out=a.join(" ");
    console.log(out);


}

//-----------------
f2(
    [2, 4, 15, 31], 5
);



//console.log(`-----------------`);