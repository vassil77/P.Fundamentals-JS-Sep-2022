function f2(params) {
    let list = new Map();

    for (let line of params) {
        line = line.split(' ');
        let name = line.shift();
        let grade = line.map(Number);
        //console.log(name);

        if (list.has(name)) {
            for (let el of grade) {
                //console.log(list.name);
                list.get(name).push(el);
            }
        } else {
            list.set(name, grade);
        }
    }


    let sorted = Array.from(list.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));

    //console.log(...sorted);

    for (let element of sorted) {
        let sum = 0;
        for (const iterator of element[1]) {
            sum += iterator;
        }
        let avg = sum / element[1].length;
        element[1] = avg;
    }
    //console.log(...sorted);

    for (const iterator of sorted) {
        console.log(`${iterator[0]}: ${iterator[1].toFixed(2)}`);
    }





}

//-----------------
f2(
    ['Steven 3 5 6 4',
        'George 4 6',
        'Tammy 2 5 3',
        'Steven 6 3'
    ]
);



//console.log(`-----------------`);