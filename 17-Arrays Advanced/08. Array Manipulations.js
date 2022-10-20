function f2(params) {
    let array = params.shift();
    array = array.split(' ');
    let command;

    for (let i = 0; i < params.length; i++) {
        command = params[i];
        command = command.split(' ');
        switch (command[0]) {
            case 'Add':
                array.push(command[1]);
                break;


            case 'Remove':
                array = array.filter(x => x !== command[1]);
                break;

            case 'RemoveAt':
                array.splice(command[1], 1);
                break;

            case 'Insert':
                array.splice(command[2], 0, command[1]);
                break;

        }

    }



    console.log(array.join(' '));
}

//-----------------
f2(
    ['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);



//console.log(`-----------------`);