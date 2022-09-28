function f2(params) {
    let array = params[0].split(" ");

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    let index = 1;
    let command = params[index++].split(" ");

    while (command[0] !== "end") {
        switch (command[0]) {
            case "swap":
                let buffer = array[command[1]];
                array[command[1]] = array[command[2]];
                array[command[2]] = buffer;
                break;

            case "multiply":

                array[command[1]] = array[command[1]] * array[command[2]];

                break;

            case "decrease":

                for (let j = 0; j < array.length; j++) {
                    array[j] = array[j] - 1;

                }

                break;



        }




        command = params[index++].split(" ");
    }



    console.log(array.join(", "));

}

//-----------------
f2(
    [
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]
);



//console.log(`-----------------`);