function f2(params) {
    let list = new Map();

    for (const line of params) {
        let [key, value] = line.split(':');

        list.set(key, value);

    }

    let sorted = Array.from(list.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

    //for (let [key, value] of list) {
    //  console.log(`${key} -> ${value}`);
    //}





}

//-----------------
f2(
    ['Bob:Huxley Rd',
        'John:Milwaukee Crossing',
        'Peter:Fordem Ave',
        'Bob:Redwing Ave',
        'George:Mesta Crossing',
        'Ted:Gateway Way',
        'Bill:Gateway Way',
        'John:Grover Rd',
        'Peter:Huxley Rd',
        'Jeff:Gateway Way',
        'Jeff:Huxley Rd'
    ]
);



//console.log(`-----------------`);