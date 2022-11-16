function f2([string, pattern]) {
    let start = string.indexOf(pattern);
    let last = string.lastIndexOf(pattern);

    while (start >= 0 && last > start && pattern.length > 0) {
        string = string.split('');
        string.splice(last, pattern.length);
        string.splice(start, pattern.length);
        console.log(`Shaked it.`);

        string = string.join('');
        pattern = pattern.split('');
        pattern.splice(Math.floor(pattern.length / 2), 1);
        pattern = pattern.join('');
        // console.log(pattern);
        start = string.indexOf(pattern);
        last = string.lastIndexOf(pattern);
    }

    console.log(`No shake.`);
    console.log(string);
}

//Judge__________________
f2(
    ['##mtm!!mm.mm*mtm.#',
        'mtm'
    ]
);