function f2(params) {

    let result = [];
    let command = params.shift();

    while (command !== 'PARTY') {
        result.push(command);
        command = params.shift();
    }

    for (const iterator of params) {
        let index = result.indexOf(iterator);
        result.splice(index, 1);
    }

    let vipResult = [];
    let regularResult = [];

    for (const iterator of result) {
        if (Number(iterator[0])) {
            vipResult.push(iterator);
        } else {
            regularResult.push(iterator);
        }
    }
    // result = result.sort((a, b) => {
    //     let A=Number(a[0]);
    //     let B=Number(b[0]);
    //     if (condition) {

    //     }
    // });



    console.log(result.length);
    if (vipResult.length > 0) {
        console.log(vipResult.join('\n'));
    }
    if (regularResult.length > 0) {
        console.log(regularResult.join('\n'));
    }



    // z = Number('a');
    // console.log(z);
}

//-----------------
f2(

    ['m8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'xys2FYzn',
        'MDzcM9ZK',
        'PARTY',
        '2FQZT3uC',
        'dziNz78I',
        'mdSGyQCJ',
        'LjcVpmDL',
        'fPXNHpm1',
        'HTTbwRmM',
        'B5yTkMQi',
        '8N0FThqG',
        'm8rfQBvl',
        'fc1oZCE0',
        'UgffRkOn',
        '7ugX7bm0',
        '9CQBGUeJ'
    ]

);



//console.log(`-----------------`);