function f2(params) {
    let n = params[0];
    let initial = params[1].split(" ");
    let start = [];
    for (let i = 0; i < n; i++) {
        start[i] = 0;
        for (let j = 0; j < initial.length; j++) {
            if (Number(initial[j]) === i) {
                start[i] = 1;
            }
        }
    }

    for (let k = 2; k < params.length; k++) { // Current Command
        let command = params[k].split(" ");
        let oldIndex = Number(command[0]);
        if (oldIndex < 0 || oldIndex > n - 1) {
            continue;
        }

        if (start[oldIndex] === 0) {
            continue;
        } else {
            start[oldIndex] = 0; //освобождаваме, калинката отлита
        }

        let flyLength = Number(command[2]);
        let newIndex = oldIndex;

        switch (command[1]) {
            case "right":
                newIndex += flyLength;
                for (let r = newIndex; r < n; r += flyLength) {
                    if (start[r] !== 1) {
                        start[r] = 1;
                        break;
                    }
                }
                break;
            case "left":
                newIndex -= flyLength;
                for (let l = newIndex; l >= 0; l -= flyLength) {
                    if (start[l] !== 1) {
                        start[l] = 1;
                        break;
                    }
                }
                break;
        }
    }
    console.log(start.join(" "));

}

//-----------------
f2(
    [5 ,
        '0 1 2',

        '0 right 1',
        '1  right 1',
        '3 right 1'
    ]
);



//console.log(`-----------------`);