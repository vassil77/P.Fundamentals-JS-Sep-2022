function f2(string) {

    let password = string.shift();
    let newPassword = "";

    let command = string.shift();


    while (command !== "Done") {
        command = command.split(" ");

        switch (command[0]) {
            case "TakeOdd":
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                // console.log(password);
                break;


            case "Cut":
                let index = Number(command[1]);
                let length = Number(command[2]);
                console.log(password); //test
                password = password.substr(0, index) + password.substr(index + length);
                console.log(password);
                break;

            case "Substitute":
                let substring = command[1];
                let substitute = command[2];
                //let pattern=substring+"g";
                if (containsSpecialChars(substring)) {
                    let pattern = new RegExp("/" + substring, "g");

                    if (password.search("/" + pattern) === -1) {
                        console.log(`Nothing to replace!`);
                    } else {
                        password = password.replace(pattern, substitute);
                        // console.log(password);
                    }
                } else {
                    let pattern = new RegExp(substring, "g");
                    if (password.search(pattern) === -1) {
                        console.log(`Nothing to replace!`);
                    } else {
                        password = password.replace(pattern, substitute);
                        // console.log(password);
                    }

                }
                break;
        }
        command = string.shift();
    }

    //console.log(string); //test

    console.log(`Your password is: ${password}`);

    function containsSpecialChars(str) {
        //const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const specialChars = /[`@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?~]/;

        return specialChars.test(str);
    }


}

//-----------------
f2
    ([
        "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
        "TakeOdd",
        "Cut 18 2",
        "Substitute ! ***",
        "Substitute ? .!.",
        "Done"
    ]);