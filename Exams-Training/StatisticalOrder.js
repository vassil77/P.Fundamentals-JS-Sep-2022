function f2(params) {
    let sortedArr = params.sort((a, b) => a - b);
    let sum = 0;
    let current = sortedArr[0];
    let countMax = 1;
    let count = 0;
    let elmax = current;

    for (const el of sortedArr) {
        sum += el;
        if (el > current) {
            current = el;
            count = 1;
        } else {
            count++;
        }
        if (count > countMax) {
            countMax = count;
            elmax = current;
        }
    }
    let moda = elmax;
    let average = sum / params.length;
    let mediana;
    if (sortedArr.length % 2 === 0) {
        mediana = sortedArr[sortedArr.length / 2 - 1] / 2 + sortedArr[sortedArr.length / 2] / 2;
    } else {
        mediana = sortedArr[sortedArr.length / 2 - 0.5];
    }

    console.log(sortedArr);
    console.log(`Мода = ${moda} (${countMax})`);
    console.log(`Медиана  = ${mediana}  (${sortedArr.length / 2})`);
    console.log(`Средна стойност  = ${average}`);
}

// JUDGE
f2(
    [
        43, 18, 43, 23, 43, 56, 56, 43, 56, 0, 33, 44, 55, 55, 55, 55, 43, 43, 25, 65, 80, 125, 25, 0, 0, 0, 0, 0, 0, 16,10,12,15,16,8
    ]
);