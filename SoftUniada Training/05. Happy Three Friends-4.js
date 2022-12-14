function f2(params) {
    const n = Number(params.shift());
    for (let i = 0; i < n; i++) {
        singlePrices = params.shift().trim().split(' ').map(Number);
        for (const price of singlePrices) {
            if (price > 20) {
                console.log(`No`);
                return false;
            }
        }

        isPossible1(singlePrices);
    }

    function sumArr(array) {
        let sum = 0;
        for (const el of array) {
            sum += el;
        }
        return sum;
    }

    function match23(sortedArr, iLeft, jRight, average) {
        // sortedArr.sort((a, b) => a - b);
        iStart = Math.min(iLeft, jRight);
        jEnd = Math.max(iLeft, jRight);
        for (let i = iStart, j = jEnd; i < j; i++) { // 2-3 digit check
            while (i < j && sortedArr[i] + sortedArr[j] > average) {
                j--;
            }
            if (i < j && sortedArr[i] + sortedArr[j] === average) {
                return [i, j];
            } else { // 3-rd digit check
                let index = sortedArr.indexOf(average - sortedArr[i] - sortedArr[j], i + 1);
                if (index >= 0 && index < j) {
                    return [i, index, j];
                }
            }
        }
        return [-1];
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

        let matchCount = 0;
        let index = singlePrices.indexOf(average);
        if (index >= 0) { // 1 digit check
            matchCount++;
            if (matchCount === 2) {
                console.log('Yes');
                return true;
            }
            singlePrices.splice(index, 1);
            index = singlePrices.indexOf(average);
            if (index >= 0) {
                matchCount++;
                if (matchCount === 2) {
                    console.log('Yes');
                    return true;
                }
                singlePrices.splice(index, 1);
            }
        }

        singlePrices.sort((a, b) => b - a);
        let sumMinCount = 0;
        let minCount;
        for (let i = 0; i < singlePrices.length; i++) {
            sumMinCount += singlePrices[i];
            if (sumMinCount + singlePrices[i + 1] >= average) {
                minCount = i + 2;
                break;
            }
        }
        // console.log(minCount); //test
        singlePrices.sort((a, b) => a - b);
        let sumMaxCount = 0;
        let maxCount;
        for (let i = 0; i < singlePrices.length; i++) {
            sumMaxCount += singlePrices[i];
            if (sumMaxCount + singlePrices[i + 1] >= average) {
                maxCount = i + 2;
                break;
            }
        }
        // console.log(maxCount); //test
        let matchIndexes = match23(singlePrices, 0, singlePrices.length - 1, average); //match 2-3
        if (matchIndexes[0] >= 0) { // Match Found 
            matchCount++;
            if (matchCount === 2) {
                console.log('Yes');
                return true;
            }
            for (let i = matchIndexes.length - 1; i >= 0; i--) {
                singlePrices.splice(matchIndexes[i], 1);
            }
            matchIndexes = match23(singlePrices, 0, singlePrices.length - 1, average);
            if (matchIndexes[0] >= 0) { // Match Found 
                matchCount++;
                if (matchCount === 2) {
                    console.log('Yes');
                    return true;
                }
                for (let i = matchIndexes.length - 1; i >= 0; i--) {
                    singlePrices.splice(matchIndexes[i], 1);
                }

            }
        }

        if (minCount>3) {
            
        }

        console.log(`No`);
        return false;
    }
}


// JUDGE

f2([
    1,
    '5 5 5 9 6 3 2 2 8',


]);



// f2([
//     5,
//     '4 2 5 8 3',
//     '5 1 7 4 3 6 1',
//     '4 5 2 5 3 4 2 5',
//     '7 9 3 8 3',
//     '5 2 1 3 2 5',
// ]);

// f2([
//     3,
//     '1 3 4 5 3 2',
//     '1 2 3',
//     '3 3 3',

// ]);