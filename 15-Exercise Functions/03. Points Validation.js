function f2(params) {
    let input = params;
    input.push(params[0] - params[2]);
    input.push(params[1] - params[3]);
    let n = input.length / 2;
    let x1=params[0];
    let y1=params[1];
    let x2=params[2];
    let y2=params[3];

    

    for (let i = 0; i < n; i++) {
        let x = input.shift();
        let y = input.shift();
        let distance = (x, y) => Math.sqrt(x * x + y * y);

        if (i < 2) {
            if (distance(x, y) === Math.round(distance(x, y))) {
                console.log(`{${x}, ${y}} to {0, 0} is valid`);
            } else {
                console.log(`{${x}, ${y}} to {0, 0} is invalid`);
            }

        } else {
            if (distance(x, y) === Math.round(distance(x, y))) {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            } else {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

            }

        }

    }

//console.log(params);
}

//-----------------
f2(
    [2, 1, 1, 1]
);



//console.log(`-----------------`);