function f2(params) {
    let list = new Map();

    for (const line of params) {
        let [key, value] = line.split(' ');
        value = Number(value);
        if (list.has(key)) {
            list.set(key, (list.get(key) + value));
        } else {

            list.set(key, value);
        }
    }

    for (let [key, value] of list) {
        console.log(`${key} -> ${value}`);
    }





}

//-----------------
f2(
    ['apple 50',
        'apple 61',
        'coffee 115',
        'coffee 40'
    ]
);



//console.log(`-----------------`);