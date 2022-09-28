function f2(a1, a2) {

    let sum = 0;
    let index = -1;
    for (let i = 0; i < a1.length; i++) {
        sum += Number(a1[i]);
        if (a1[i] !== a2[i]) {
            index = i;
            break;
        }

    }

    if (index > -1) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

f2(
    ['1'], ['10']
    );



//console.log(`-----------------`);