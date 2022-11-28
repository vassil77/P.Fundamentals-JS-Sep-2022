function f2(params) {
    let sortedByX = params.sort((a, b) => a[0] - b[0]);
    let M = sortedByX.shift();
    let N = sortedByX.pop();

    let sortedByY = params.sort((a, b) => a[1] - b[1]);
    let P = sortedByY.shift();
    let Q = sortedByY.pop();



    function AreaABC([x0, y0], [x1, y1], [x2, y2]) {
        return (y0 + y1) / 2 * (x1 - x0) + (y1 + y2) / 2 * (x2 - x1);
    }

    let sum = AreaABC(M, Q, N) - AreaABC(M, P, N);



    console.log(sum);
}

// JUDGE
f2(
    [
        [0, 0],
        [10, 0],
        [10, 5],
        [0, 0]
    ]
);