function TheImitationGame(params) {

    let i = 0;
    let message = params[i++];
    let command = params[i++];


    while (command !== "Decode") {

        const instruction = command.split("|");

        switch (instruction[0]) {
            case "Move":
                let n = Number(instruction[1]);
                message = message.substr(n) + message.substr(0, n);
                break;

            case "Insert":
                let index = Number(instruction[1]);
                let part = instruction[2];

                message = message.slice(0, index) + part + message.slice(index);
                break;

            case "ChangeAll":
                let oldPart = instruction[1];
                let newPart = instruction[2];

                message = message.split(oldPart).join(newPart);

                break;
        }
        command = params[i++];
    }
    console.log(`The decrypted message is: ${message}`);
}

TheImitationGame


    (
        [
            'owyouh',
            'Move|2',
            'Move|3',
            'Insert|3|are',
            'Insert|9|?',
            'Decode'
        ]
    )




;



//console.log(`-----------------`);