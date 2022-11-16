function f2([firstChar, secondChar, string]) {

    let asciiFirst = firstChar.charCodeAt();
    let asciiSecond = secondChar.charCodeAt();
    let min = Math.min(asciiFirst, asciiSecond);
    let max = Math.max(asciiFirst, asciiSecond);
    let sum = 0;
    for (const char of string) {
        let asciiChar = char.charCodeAt();
        if (asciiChar > min && asciiChar < max) {
            sum += asciiChar;
        }
    }
    console.log(sum);
}

//Judge__________________
f2(
    ['a',
        '1',
        'jfe392$#@j24ui9ne#@$'
    ]
);