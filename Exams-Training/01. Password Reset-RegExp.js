function f2(params) {
    let input = params;
    let string = input.shift();


    let command = input.shift();
    let buffer = "";

    while (command !== "Done") {
        command = command.split(" ");

        switch (command[0]) {
            case "TakeOdd":
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 === 1) {
                        buffer += string[i];
                    }
                }
                string = buffer;
                console.log(string);
                break;


            case "Cut":
                let index = Number(command[1]);
                let length = Number(command[2]);

                string = string.substr(0, index) + string.substr(index + length);
                console.log(string);
                break;

            case "Substitute":
                let substring = command[1];
                let substitute = command[2];
                //let pattern=substring+"g";
                if (containsSpecialChars(substring)) {
                    let pattern = new RegExp("/" + substring, "g");

                    if (string.search("/" + pattern) === -1) {
                        console.log(`Nothing to replace!`);
                    } else {
                        string = string.replace(pattern, substitute);
                        console.log(string);
                    }
                }else{
                    let pattern = new RegExp(substring, "g");
                    if (string.search(pattern) === -1) {
                        console.log(`Nothing to replace!`);
                    } else {
                        string = string.replace(pattern, substitute);
                        console.log(string);
                    }

                }
                break;
        }
        command = input.shift();
    }

    //console.log(string); //test

    console.log(`Your password is: ${string}`);

    function containsSpecialChars(str) {
        //const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const specialChars = /[`@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?~]/;

        return specialChars.test(str);
    }


}

//-----------------
f2
(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

;