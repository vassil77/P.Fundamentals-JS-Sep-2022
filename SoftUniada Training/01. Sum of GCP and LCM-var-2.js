function f2(params) {
    let N = Number(params.shift());
    let M = Number(params.shift());
    let maxMN = Math.max(M, N);

    function primeNumbers(max) {
        if (max === 1) {
            return [1];
        }
        let result = [];
        for (let i = 2; i <= max; i++) {
            let isPrime = true;
            for (let j = 2; j < i - 1; j++) {
                if (i % j === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                result.push(i);
            }
        }
        return result;

    }

    function primeDivisors(N, maxMN) {
        let primeDivisors = primeNumbers(maxMN);
        let objectN = {};
        for (const el of primeDivisors) {
            objectN[el] = 0;
            while (N > 1) {
                if (N % el === 0) {
                    N = N / el;
                    objectN[el]++;
                } else {
                    break;
                }
            }
        }
        return objectN;
    }

    let objectN = primeDivisors(N, maxMN);
    let objectM = primeDivisors(M, maxMN);

    let maxCommonDivisor = 1;
    let minCommonMultiple = 1;
    for (const keyN in objectN) {
        let min = Math.min(objectN[keyN], objectM[keyN]);
        maxCommonDivisor *= Math.pow(keyN, min);

        let max = Math.max(objectN[keyN], objectM[keyN]);
        minCommonMultiple *= Math.pow(keyN, max);
    }
    console.log(maxCommonDivisor + minCommonMultiple);
}

// JUDGE
f2([
    999,
    998
]);