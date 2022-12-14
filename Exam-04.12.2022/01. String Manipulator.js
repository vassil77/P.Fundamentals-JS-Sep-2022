function f2(params) {
    let input = params.slice(); //optional
    let text = input.shift();

    let line = input.shift();

    while (line !== "End") {
        line = line.split(" ");
        let command = line[0];
        let substr;
        let char;

        switch (command) {

            case "Translate":
                char = line[1];
                let replacement = line[2];
                let regexp = new RegExp(char, 'g');
                text = text.replace(regexp, replacement);
                console.log(text);
                break;


            case "Includes":
                substr = line[1];

                if (text.includes(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;


            case "Start":
                substr = line[1];

                if (text.startsWith(substr)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;


            case "Lowercase":
                text = text.toLowerCase();
                console.log(text);
                break;


            case "FindIndex":
                char = line[1];
                let lastIndex = text.lastIndexOf(char);
                console.log(lastIndex);
                break;


            case "Remove":
                let startIndex = Number(line[1]);
                let count = Number(line[2]);
                text = text.substring(0, startIndex) + text.substring(startIndex + count);
                console.log(text);
                break;
        }
        line = input.shift();
    }
}

//JUDGE
f2

    (["*S0ftUni is the B3St Plac3**",
        "Translate 2 o",
        "Includes best",
        "Start the",
        "Lowercase",
        "FindIndex p",
        "Remove 2 7",
        "End"
    ])

;