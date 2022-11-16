function f2(params) {
    params = params.toLowerCase();
    let words = params.split(' ');
    let result = [];

    for (let candidate of words) {
        let count = 0;
        for (let el of words) {
            if (candidate === el) {
                count++;
            }
        }
        if (count % 2 === 1 && !result.includes(candidate)) {
            result.push(candidate);
        }
    }


    console.log(result.join(' '));
}

//-----------------
f2(
    'Cake IS SWEET is Soft CAKE sweet Food'
);



//console.log(`-----------------`);