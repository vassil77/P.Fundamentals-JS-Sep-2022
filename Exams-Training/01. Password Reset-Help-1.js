function passwordReset(string) {

    let password = string.shift();
    let newPassword = '';

    let command = string.shift().split(" ");

    while (command[0] != "Done") {
        switch (command[0]) {
            case 'TakeOdd':
                for (let i = 0; i < password.length; i++) {
                    let char = password[i];
                    if (i % 2 !== 0) {
                        newPassword += char;
                    }
                }
                password = newPassword;
                console.log(password);
                // command = string.shift().split(" "); //????
                break;
            case 'Cut':
                let startIndex = +command[1];
                let endIndex = +command[2];
                // let cutString = password.substring(startIndex, startIndex + endIndex);
                // console.log(cutString);//test
                // let regExp = new RegExp(`${cutString}`);
                // password = password.replace(regExp, "");

                password = password.substr(0, startIndex) + password.substr(startIndex + endIndex);
                console.log(password);
                // command = string.shift().split(" "); //????
                break;
            case 'Substitute':
                let charToFind = command[1];
                let charToReplace = command[2];

                let specialChars = /[`@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?~]/;
                // console.log(specialChars.test(newPassword));

                if (specialChars.test(password)) {
                    if (password.includes(charToFind)) {
                        let regExp = new RegExp("/" + `${charToFind}`, "g");
                        password = password.replace("/" + regExp, charToReplace);
                        console.log(password);
                    } else {
                        console.log('Nothing to replace!');
                    }

                } else {
                    if (password.includes(charToFind)) {
                        let regExp = new RegExp(`${charToFind}`, "g");
                        password = password.replace(regExp, charToReplace);
                        console.log(password);
                    } else {
                        console.log('Nothing to replace!');
                    }

                }
                // command = string.shift().split(" "); //????
                break;
        }
        command = string.shift().split(" ");
    }
    console.log(`Your password is: ${password}`);
}

// passwordReset([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"
// ]);


passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);