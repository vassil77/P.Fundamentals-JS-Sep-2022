function f2(params) {

    let currentNumber = 1;
    let output = [];
    let j = 0;
    for (let i = 0; i < params.length; i++) {
        if (params[i] === "add") {
            output[j] = currentNumber;
            j++;

        } else if (params[i] === "remove") {
            if (j >=1) {
                j--;
                output.pop();
            }

        }

        currentNumber++;
    }

    if (output.length===0) {
        console.log(`Empty`);
    } else {
        console.log(output.join(" "));
    }
}

//-----------------
f2(
    ['remove', 'add', 'add']
    );



//console.log(`-----------------`);