function f2(params) {
    let input = params;
    let message = input.shift();

    let command = input.shift();

    while (command !== "Reveal") {
        command = command.split(":|:");
        let substring;
        let pattern;
        switch (command[0]) {
            case "InsertSpace":
                let index = Number(command[1]);
                message = message.slice(0, index) + " " + message.slice(index);
                console.log(message);
                break;


            case "Reverse":

                substring = command[1];
                //console.log(substring);                    //test print
                //console.log(message.search(substring));  //test print
                //pattern=new RegExp(substring);
                //console.log(containsSpecialChars(substring));  // test
                if (containsSpecialChars(substring)) {
                    if (message.search("/" + substring) === -1) {
                        console.log(`error`);
                        break;
                    } else {
                        message = message.replace(substring, "");
                        let newString = substring.split("").reverse().join("");
                        message += newString;
                        console.log(message);
                    }
                    break;
                } else {
                    if (message.search(substring) === -1) {
                        console.log(`error`);
                        break;
                    } else {
                        message = message.replace(substring, "");
                        let newString = substring.split("").reverse().join("");
                        message += newString;
                        console.log(message);
                    }
                    break;
                }

                break;


            case "ChangeAll":
                substring = command[1];
                let replacement = command[2];

                pattern = new RegExp(substring, "g");
                message = message.replace(pattern, replacement);
                console.log(message);

                break;
        }




        command = input.shift();

    }


    console.log(`You have a new text message: ${message}`);

    function containsSpecialChars(str) {
        //const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const specialChars = /[`@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        return specialChars.test(str);
    }
}

//-----------------
f2(
    ['Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
);