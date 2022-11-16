function f2(params) {
    let result = {};
    let n = params.length;
    for (let i = 0; i < n; i += 2) {
        let resource = params.shift();
        let quantity = Number(params.shift());
        // console.log(quantity);

        if (result.hasOwnProperty(resource)) {
            result[resource] += quantity;
        } else {
            result[resource] = quantity;
        }



    }

    for (let resource in result) {
        console.log(`${resource} -> ${result[resource]}`);
    }


    // console.log(result);
}

//-----------------
f2(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
);



//console.log(`-----------------`);