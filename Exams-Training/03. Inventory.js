function f2(params) {
    let input = params;
    let inventory = input.shift();
    inventory = inventory.split(", ");

    let command = input.shift();

    while (command !== "Craft!") {
        command = command.split(" - ");
        let item;
        let index;
        switch (command[0]) {
            case "Collect":
                item = command[1];
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;


            case "Drop":
                item = command[1];
                 
                if (inventory.includes(item)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if (item === inventory[i]) {
                            index = i;
                        }
                    }
                    inventory.splice(index, 1);
                }
                break;


            case "Combine Items":
                command[1] = command[1].split(":");
                let oldItem = command[1][0];
                let newItem = command[1][1];
                if (inventory.includes(oldItem)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if (oldItem === inventory[i]) {
                            index = i;
                        }
                    }
                    inventory.splice(index+1, 0, newItem);
                }
                break;


                case "Renew":
                item = command[1];
                
                if (inventory.includes(item)) {
                    for (let i = 0; i < inventory.length; i++) {
                        if (item === inventory[i]) {
                            index = i;
                        }
                    }
                    inventory.splice(index, 1);
                    inventory.push(item);
                }
                break;

            default:
                break;
        }



        command = input.shift();
    }

    console.log(inventory.join(", "));


}

//-----------------
f2(
    [
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
      ]
);