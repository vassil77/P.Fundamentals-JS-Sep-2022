function match23(sortedArr, iLeft, jRight, average) {
    // sortedArr=sortedArr.sort((a, b) => a - b);
    iStart=Math.min(iLeft,jRight);
    jEnd=Math.max(iLeft,jRight);
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

// JUDGE
let result = match23([3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2,3,8 ], 0, 10, 9);
console.log(result);