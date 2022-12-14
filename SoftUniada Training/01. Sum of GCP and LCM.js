function f2(params) {
    let N = Number(params.shift());
    let M = Number(params.shift());

    let delArrN = [];
    let delArrM = [];

    for (let i = 1; i <= N; i++) {
        if (N % i === 0) {
            delArrN.push(i);
        }
    }
    // console.log(delArrN); //test

    for (let i = 1; i <= M; i++) {
        if (M % i === 0) {
            delArrM.push(i);
        }
    }
    // console.log(delArrM); //test
    let minNM = Math.min(N, M);
    let maxDelitel;
    for (let i = minNM; i >= 1; i--) {
        if (delArrN.includes(i) && delArrM.includes(i)) {
            maxDelitel = i;
            break;
        }
    }
    
    let index = 1;
    let kratnoArrN = [N];
    let kratnoArrM = [M];
    let hasCommonKratno = false;
    let minCommonKratno;

    while (!hasCommonKratno) {
        for (const elN of kratnoArrN) {
            for (const elM of kratnoArrM) {
                if (elN === elM) {
                    minCommonKratno = elN;
                    hasCommonKratno = true;
                    break;
                }
            }
        }
        index++;
        kratnoArrN.push(N*index);
        kratnoArrM.push(M*index);
    }
    console.log(maxDelitel);
    console.log(minCommonKratno);
    console.log(maxDelitel+minCommonKratno);
}

// JUDGE
f2([
    18,
    20
]);