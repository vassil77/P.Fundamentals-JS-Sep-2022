function f2(a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            c[i] = Number(a[i]) + Number(b[i]);
        } else {
            c[i] = a[i] + b[i] + "";
        }

    }
    let out = c.join(" - ");
    console.log(out);


}

//----------------------
f2(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);



//console.log(`-----------------`);