function f2(params) {

    params.sort((a, b) => a.localeCompare(b));


    let index = params[0].split('')[0];
    console.log(index);

    for (let i = 0; i < params.length; i++) {
        if (params[i].split('')[0] === index) {
            console.log(`  ${params[i].split(' : ')[0]}: ${params[i].split(' : ')[1]}`);
        } else {
            index = params[i].split('')[0];
            console.log(index);
            console.log(`  ${params[i].split(' : ')[0]}: ${params[i].split(' : ')[1]}`);
        }
    }

}

//-----------------
f2(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]


);



//console.log(`-----------------`);