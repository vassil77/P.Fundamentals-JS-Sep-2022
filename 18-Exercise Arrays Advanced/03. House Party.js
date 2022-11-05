function f2(params) {
    let result = [];
    let command;
    for (let i = 0; i < params.length; i++) {
        command = params[i].split(' ');
        
        switch (command[2]) {
            case 'going!':
                if (!result.includes(command[0])) {
                    result.push(command[0]);
                } else {
                    console.log(`${command[0]} is already in the list!`);
                }
                break;
            case 'not':
                if (result.includes(command[0])) {
                    let index = result.indexOf(command[0]);
                    result.splice(index, 1);
                } else {
                    console.log(`${command[0]} is not in the list!`);
                }
                break;
        }
    }


    console.log(result.join('\n'));
    //console.log(result);
}

//-----------------
f2(
    ['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);



//console.log(`-----------------`);