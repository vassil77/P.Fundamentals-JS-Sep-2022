function f2(params) {
    let i = 0;
    let efficiency = 0;
    efficiency += Number(params[i++]);
    efficiency += Number(params[i++]);
    efficiency += Number(params[i++]);

    let students = Number(params[i++]);
    let hours = 0;

    for (let j = 1; j <= students; j++) {
        if (j % efficiency === 1) {
            hours++;
        }

        if (j % (3 * efficiency) === 1 && j > 3) {
            hours++;

        }

    }
    console.log(`Time needed: ${hours}h.`);
}
//-----------------
f2(
    ['3', '2', '5', '40']
);



//console.log(`-----------------`);