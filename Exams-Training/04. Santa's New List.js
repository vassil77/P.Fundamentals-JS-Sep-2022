function f2(params) {
    let children = {};
    let presents = {};
    let line = params.shift();

    while (line !== 'END') {
        line = line.split('->');
        switch (line[0]) {
            case 'Remove':
                let name = line[1];
                delete children[name];
                break;

            default:
                let [newName, type, amount] = line;
                amount = Number(amount);
                if (!children.hasOwnProperty(newName)) {
                    children[newName] = 0;
                }
                children[newName] += amount;

                if (!presents.hasOwnProperty(type)) {
                    presents[type] = 0;
                }
                presents[type] += amount;
                break;
        }
        line = params.shift();
    }
    let sortedChildren = Object.entries(children).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);


    console.log(`Children:`);
    for (const [child, amount] of sortedChildren) {
        console.log(`${child} -> ${amount}`);
    }

    console.log(`Presents:`);
    for (let type in presents) {
        console.log(`${type} -> ${presents[type]}`);


    }


}

// JUDGE
f2([

    'Marty->Toys->5',
    'Sam->Candy->20',
    'Leo->Candy->10',
    'Leo->Toys->1',
    'Katy->Clothes->4',
    'Bobbie->Clothes->6',
    'Tanya->Phone->1',
    'Nasko->Tablet->3',
    'END'

]);