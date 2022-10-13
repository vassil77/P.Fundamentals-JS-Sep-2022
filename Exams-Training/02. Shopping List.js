function f2(params) {
    let input = params;
    let list = input.shift();
    list = list.split("!");

    command = input.shift();

    while (command !== "Go Shopping!") {

        command = command.split(" ");
        let item;
        let oldItem;
        let newItem;
        switch (command[0]) {
            case "Urgent":
                item = command[1];
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;


            case "Unnecessary":
                item = command[1];
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                }
                break;


            case "Correct":
                oldItem = command[1];
                newItem = command[2];

                if (list.includes(oldItem)) {
                    let index = list.indexOf(oldItem);
                    list.splice(index, 1, newItem);
                }
                break;


            case "Rearrange":
                item = command[1];
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                    list.push(item);
                }
                break;
        }
        command = input.shift();
    }

    console.log(list.join(", ")); //test
}

//-----------------
f2
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"
    ])

;