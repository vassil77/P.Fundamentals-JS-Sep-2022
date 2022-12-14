function f2(params) {
    let n = Number(params.shift());

    function pairSum(array, sum) {
        array = array.map(Number);
        for (let i = 0; i < array.length - 1; i++) {
            let index2 = array.indexOf(sum - array[i], i + 1);
            if (index2 >= 1) {
                let result = [i, index2];
                return result;
            }
        }
        return [-1, -1];
    }

    function sumArr(array) {
        let sum = 0;
        for (const el of array) {
            sum += el;
        }
        return sum;
    }
    // console.log(sumArr([]));
    // let isPossible = true;
    for (let i = 0; i < n; i++) {
        currentPrices = params.shift().split(' ').map(Number);
        let sum = sumArr(currentPrices);

        if (sum % 3 !== 0) {
            console.log(`No`);
            return false;
        }

        let average = sum / 3;
        for (const price of currentPrices) {
            if (price > average) {
                console.log(`No`);
                return false;
            }
        }

        console.log(average);
        currentPrices.sort((a, b) => b - a);
        // currentPrices.sort((a, b) => a + b - average);
        console.log(currentPrices);

        let counter = 0;
        let value = average;
        for (let i = 1; i <= 2; i++) {
            if (currentPrices.indexOf(value) >= 0) { // 1 digit
                counter++;
                if (counter === 2) {
                    console.log('Yes');
                    return true;
                }
                currentPrices.splice(currentPrices.indexOf(value), 1);
            } else { //2 digits
                let bufferArr = []; //Push
                while (sumArr(bufferArr) + currentPrices[0] <= value && counter < 2) {
                    bufferArr.push(currentPrices.shift());
                }

                if (sumArr(bufferArr) === value) {
                    counter++;
                    if (counter === 2) {
                        console.log('Yes');
                        return true;
                    } else {
                        continue;
                    }
                } else {
                    bufferArr.pop();
                    bufferArr.push(currentPrices.shift());
                }



                // let [index1, index2] = pairSum(currentPrices, value);
                // if (index1 >= 0) {
                //     counter++;
                //     currentPrices.splice(index2, 1);
                //     currentPrices.splice(index1, 1);
                // }
            }
        }

        if (counter >= 2) {
            console.log('Yes');
            return true;
        } else {
            console.log(`No`);
            return false;
        }


        // console.log(average); //test
    }


}

// JUDGE
f2([

        1,
        // '4 2 5 8 3',
        // '5 1 7 4 3 6 1',
        '4 5 2 5 3 4 2 5',
        // '7 9 3 8 3',
        // '5 2 1 3 2 5'
    ]

);