function f2(params) {

    let numbersSet = new Set();

    for (let line of params) {
        let [command, number] = line.split(', ');

        switch (command) {
            case 'IN':
                numbersSet.add(number);
                break;


            case 'OUT':
                numbersSet.delete(number);
                break;


        }

    }

    let sortedNumbers = Array.from(numbersSet).sort((a, b) => a.localeCompare(b));

    if (sortedNumbers.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(sortedNumbers.join('\n')); // 👉️ [100, 300, 700]
    }

}

//-----------------
f2(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);



//console.log(`-----------------`);