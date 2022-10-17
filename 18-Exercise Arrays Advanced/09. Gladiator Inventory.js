function f2(allCommands) {
    let inventory = allCommands.shift();
    inventory = inventory.split(' ');

    let end = allCommands.length;

    for (let i = 0; i < end; i++) {
        command = allCommands.shift();
        command = command.split(' ');
        switch (command[0]) {
            case 'Buy':
                if (inventory.includes(command[1]) === false) {
                    inventory.push(command[1]);
                }
                break;



            case 'Trash':
                if (inventory.includes(command[1])) {
                    index = inventory.indexOf(command[1]);
                    inventory.splice(index, 1);
                }
                break;


            case 'Repair':
                if (inventory.includes(command[1])) {
                    index = inventory.indexOf(command[1]);
                    inventory.splice(index, 1);
                    inventory.push(command[1]);
                }
                break;


            case 'Upgrade':
                buffer = command[1].split("-");
                equipment = buffer.shift();
                upgrade = buffer.shift();

                if (inventory.includes(equipment)) {
                    index = inventory.indexOf(equipment);
                    inventory.splice(index+1, 0,equipment + ":" + upgrade );
                    
                }
                break;
        }
        //console.log(inventory);//test
    }



console.log(inventory.join(' '));
}

//-----------------
f2(
    ['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);



//console.log(`-----------------`);