function f2(params) {
    let i = 0;
    let list = params[i++];
    let command = params[i++];

    while (command !== "Travel") {
        switch (command[0]) {
            case "A":
                command = command.split(":");
                if (0 <= Number(command[1]) && Number(command[1]) < list.length) {
                    list = list.slice(0, Number(command[1])) + command[2] + list.slice(Number(command[1]));
                }
                console.log(list);
                break;

            case "R":
                command = command.split(":");
                if (0 <= Number(command[1]) && Number(command[2] < list.length) && 0 <= Number(command[2]) && Number(command[1] < list.length)) {
                    list = list.slice(0, Number(command[1])) + list.slice((Number(command[2]) + 1));
                    
                }
                console.log(list);
                break;

            case "S":
                command = command.split(":");
                //let old = new RegExp(command[1],"g");
                //console.log(old);
                list = list.replace(RegExp(command[1], "g"), command[2]);
                console.log(list);
                break;
        }
        command = params[i++];
    }
    console.log(`Ready for world tour! Planned stops: ${list}`);
}

//-----------------
f2(
    [
        "Hawai::Cyprys-Greece",
        "Add Stop:7:Rome",
        "Remove Stop:11:16",
        "Switch:Hawai:Bulgaria",
        "Travel"
    ]
);