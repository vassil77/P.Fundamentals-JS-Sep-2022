function f2(params) {
    let input = params;
    let key = input.shift();

    let command = input.shift();

    while (command !== "Generate") {
        command = command.split(">>>");
        let substring;
        switch (command[0]) {
            case "Contains":
                substring = command[1];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;


            case "Flip":
                caseUL = command[1];
                startIndex = Number(command[2]);
                endIndex = Number(command[3]);
                let slice = key.slice(startIndex, endIndex);
                if (caseUL === "Upper") {
                    slice = slice.toUpperCase();
                } else {
                    slice = slice.toLowerCase();
                }
                key = key.slice(0, startIndex) + slice + key.slice(endIndex);
                console.log(key);
                break;


            case "Slice":
                startIndex = Number(command[1]);
                endIndex = Number(command[2]);
                key = key.slice(0, startIndex) + key.slice(endIndex);
                console.log(key);
                break;

            default:
                break;
        }





        command = input.shift();
    }


    console.log(`Your activation key is: ${key}`);

}

//-----------------
f2
(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
    ;


//-----------------
//   input=params;