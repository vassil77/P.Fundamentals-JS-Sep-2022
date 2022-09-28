function f2(params) {
    let i = 0;
    let array = params[i++].split(" ");
    let command = params[i++];
    while (command !== "Play!") {
        const commandSplit = command.split(" ");
        switch (commandSplit[0]) {
            case "Install":
                if (array.includes(commandSplit[1]) === false) {
                    array.push(commandSplit[1]);
                }
                break;

            case "Uninstall":
                if (array.includes(commandSplit[1])) {
                    let buffer = array;
                    let j = 0;
                    for (let i = 0; i < buffer.length; i++) {
                        if (buffer[i] !== commandSplit[1]) {
                            array[j] = buffer[i];
                            j++;
                        }
                    }
                    array.pop();
                }
                break;

            case "Update":
                if (array.includes(commandSplit[1])) {
                    let buffer = array;
                    let j = 0;
                    for (let i = 0; i < buffer.length; i++) {
                        if (array[i] !== commandSplit[1]) {
                            array[j] = array[i];
                            j++;
                        }
                    }
                    array[array.length - 1] = commandSplit[1];
                }
                break;

            case "Expansion":
                const commandExpansion = commandSplit[1].split("-");
                if (array.includes(commandExpansion[0])) {
                    let index = 0;
                    const buffer2 = array;
                    array = [];

                    for (let i = 0; i < buffer2.length; i++) {
                        if (buffer2[i] === commandExpansion[0]) {
                            index = i;
                        }
                    }

                    for (let j = 0; j <= index; j++) {
                        array[j] = buffer2[j];
                    }

                    array[index + 1] = (buffer2[index] + ":" + commandExpansion[1]);

                    for (let k = index + 2; k <= buffer2.length; k++) {
                        array[k] = buffer2[k - 1];


                    }

                }
                break;


        }


       
        command = params[i++];

    }

    console.log(array.join(" "));
}


//-----------------
f2(
    ['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);



//console.log(`-----------------`);