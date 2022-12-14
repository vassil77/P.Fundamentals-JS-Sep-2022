function f2(params) {
    let n = Number(params.shift());
    let text = params.shift();
     text = text.toUpperCase();

    let b = 3 * n + 6;
    let h = 3 * n + 1;
    let handleLength = b - 3 - 2 * n - text.length;

    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(1 + n + text.length / 2 - 3) + '~ ~ ~');
    }
    console.log('='.repeat(b - 1));
    for (let i = 0; i < n - 2; i++) {
        if (i!==Math.floor((n-2)/2)) {
            console.log(`|` + '~'.repeat(n) + '~'.repeat(text.length) + '~'.repeat(n) + '|' + ' '.repeat(handleLength) + '|');

        } else {
            console.log(`|` + '~'.repeat(n) + text + '~'.repeat(n) + '|' + ' '.repeat(handleLength) + '|');
 
        }
    }

    console.log('='.repeat(b - 1));
    for (let i = n - 1; i >= 0; i--) {
        console.log(' '.repeat(n - 1 - i) + '\\' + '@'.repeat(6 + 2 * i) + '/');
    }
    console.log('-'.repeat(b - 1));
}

//Judge

f2([

    3,
'Java'
]);