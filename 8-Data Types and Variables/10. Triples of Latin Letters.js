function f2(nString) {
    n = Number(nString);

    for (let i = 1; i <= n; i++) {
        let a = String.fromCharCode(96 + i);

        for (let j = 1; j <= n; j++) {
            let b = String.fromCharCode(96 + j);
            for (let k = 1; k <= n; k++) {
                let c = String.fromCharCode(96 + k);
                console.log(a + b + c);
            }

        }




    }
}


f2(
    "2"
);



//console.log(`-----------------`);