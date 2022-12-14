function passwordReset(string) {
    let newPassword = string.shift();
    let bufferPassword = '';

    let command = string.shift().split(" ");

    while (command[0] != "Done") {
        switch (command[0]) {
            case 'TakeOdd':
                for (let i = 0; i < newPassword.length; i++) {
                    let char = newPassword[i];
                    if (i % 2 !== 0) {
                        bufferPassword += char;
                    }
                }
                newPassword = bufferPassword;
                bufferPassword = '';
                console.log(newPassword);
                command = string.shift().split(" ");
                break;
            case 'Cut':
                let startIndex = +command[1];
                let endIndex = +command[2];
                let cutString = newPassword.substring(startIndex, startIndex + endIndex);
                let regExp = new RegExp(`${cutString}`);
                newPassword = newPassword.replace(regExp, "");
                console.log(newPassword);
                command = string.shift().split(" ");
                break;
            case 'Substitute':
                let charToFind = command[1];
                let charToReplace = command[2];
                if (newPassword.includes(charToFind)) {
                    let regExp = new RegExp(`${charToFind}`, "g");
                    newPassword = newPassword.replace(regExp, charToReplace);
                    console.log(newPassword);
                } else {
                    console.log('Nothing to replace!');
                }
                command = string.shift().split(" ");
                break;
        }
    }
    console.log(`Your password is: ${newPassword}`);
}
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "TakeOdd",
    "Done"
]));