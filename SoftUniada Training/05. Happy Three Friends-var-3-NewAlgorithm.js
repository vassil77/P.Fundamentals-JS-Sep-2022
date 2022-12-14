function f2(params) {
    const n = Number(params.shift());

    for (let i = 0; i < n; i++) {
        singlePrices = params.shift().trim().split(' ').map(Number);
        singlePrices3 = singlePrices.slice();
        singlePrices1 = singlePrices.slice();
        isPossible3(singlePrices3);
        isPossible1(singlePrices1);
        console.log('---------');
    }

    function sumArr(array) {
        let sum = 0;
        for (const el of array) {
            sum += el;
        }
        return sum;
    }

    function isPossible3(singlePrices) {
        if (singlePrices.length < 3) {
            console.log(`No`);
            return false;
        }

        let totalPrice = sumArr(singlePrices);

        if (totalPrice % 3 !== 0) {
            console.log(`No`);
            return false;
        }

        let average = totalPrice / 3;

        for (const price of singlePrices) {
            if (price > average) {
                console.log(`No`);
                return false;
            }
        }

        singlePrices.sort((a, b) => b - a);
        let counter = 0;
        let index = singlePrices.indexOf(average);

        if (index >= 0) { //1 digit
            counter++;
            if (counter === 2) { //match found
                console.log('Yes');
                return true;
            }
            singlePrices.splice(index, 1);
            index = singlePrices.indexOf(average);
            if (index >= 0) { //match found
                counter++;
                if (counter === 2) {
                    console.log('Yes');
                    return true;
                }
                singlePrices.splice(index, 1);
            }
        }

        for (let j = 0; j <= singlePrices.length - 3; j++) { // j+1 elements Group

            let cycles = singlePrices.length - 1 - j;

            for (let i = 0; i < cycles; i++) {
                let currentGroupSum = 0;
                for (let k = i; k <= i + j; k++) {
                    currentGroupSum += singlePrices[k];
                }

                if (currentGroupSum <= average) {
                    if (currentGroupSum === average) { //match found
                        counter++;
                        if (counter === 2) {
                            console.log('Yes');
                            return true;
                        }
                        singlePrices.splice(i, j + 1);
                        cycles = singlePrices.length - 1;
                        i = -1;
                        continue;

                    } else {
                        index = singlePrices.indexOf(average - currentGroupSum, i + j + 1);
                        if (index >= 0) { //match found
                            counter++;
                            if (counter === 2) {
                                console.log('Yes');
                                return true;
                            }
                            singlePrices.splice(index, 1);
                            singlePrices.splice(i, j + 1);
                            cycles = singlePrices.length - 1;
                            i = -1;
                            continue;
                        }
                    }
                }
            }
        }

        console.log(`No`);
        return false;

    }

    function isPossible1(singlePrices) {
        if (singlePrices.length < 3) {
            console.log(`No`);
            return false;
        }

        let totalPrice = sumArr(singlePrices);

        if (totalPrice % 3 !== 0) {
            console.log(`No`);
            return false;
        }

        let average = totalPrice / 3;

        for (const price of singlePrices) {
            if (price > average) {
                console.log(`No`);
                return false;
            }
        }

        let counter = 0;
        let bufferArr = [];
        let sumBuffer = 0;
        let restArr = [];
        let cycles = singlePrices.length;
        singlePrices.sort((a, b) => b - a);
        let dropArr = [];

        for (let i = 0; i < cycles; i++) {
            if (sumBuffer + singlePrices[0] <= average) {
                sumBuffer += singlePrices[0];
                bufferArr.push(singlePrices.shift());

                if (sumBuffer === average) { //match found
                    counter++;
                    if (counter === 2) {
                        console.log('Yes');
                        return true;
                    } else {
                        bufferArr = []; //drop out Forever 
                        sumBuffer = 0;
                        restArr = dropArr.concat(restArr);
                        dropArr = [];
                        singlePrices = restArr.concat(singlePrices);
                        restArr = [];
                        singlePrices.sort((a, b) => b - a);
                        cycles = singlePrices.length;
                        i = -1;
                        continue;
                    }

                }
            } else {
                restArr.push(singlePrices.shift());

                if (sumArr(restArr) === average) { //test
                    counter++;
                    if (counter === 2) {
                        console.log('Yes');
                        return true;
                    }
                    restArr = []; //drop out Forever
                }
            }

            if (i === (cycles - 1) && counter < 2 && bufferArr.length + restArr.length > 1) {
                if (bufferArr.length === 1) {
                    bufferArr.pop(); // drop out Forever
                    bufferArr = dropArr.slice();
                    sumBuffer = sumArr(bufferArr);
                    dropArr = [];
                } else if (bufferArr.length > 1) {
                    sumBuffer -= bufferArr[bufferArr.length - 1];
                    dropArr.push(bufferArr.pop()); // to dropArr

                    if (sumArr(dropArr) === average) { //test
                        counter++;
                        if (counter === 2) {
                            console.log('Yes');
                            return true;
                        }
                        dropArr = []; //drop out Forever
                    }
                }

                singlePrices = bufferArr.concat(restArr);
                singlePrices.sort((a, b) => b - a);
                bufferArr = [];
                sumBuffer = 0;
                restArr = [];
                cycles = singlePrices.length;
                i = -1;
            }
        }

        // if (counter < 2) {
        console.log(`No`);
        return false;
        // }
    }
}

// JUDGE

f2([

    1,
    '7 7 2 2 5 3 6 4 2 5 4 1 3 2 1',

]);

// f2([
//     10,
//     '4 2 5 8 3',
//     '5 1 7 4 3 6 1',
//     '4 5 2 5 3 4 2 5',
//     '7 9 3 8 3',
//     '5 2 1 3 2 5',
//     '4 2 5 8 3',
//     '5 1 7 4 3 6 1',
//     '4 5 2 5 3 4 2 5',
//     '7 9 3 8 3',
//     '5 2 1 3 2 5'
// ]);

// );

// f2([5,
//     '4 2 5 8 3',
//     '5 1 7 4 3 6 1',
//     '4 5 2 5 3 4 2 5',
//     '7 9 3 8 3',
//     '5 2 1 3 2 5'
// ]);


// f2([

//         '3',
//         '1 3 4 5 3 2',
//         '1 2 3',
//         '3 3 3'
//     ]

// );