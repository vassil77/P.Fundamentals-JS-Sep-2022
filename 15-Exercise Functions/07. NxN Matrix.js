function f2(params) {
    let n = Number(params);
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' ';
        }
        console.log(row);
    }
}

//-----------------
f2(
    5
);



//console.log(`-----------------`);