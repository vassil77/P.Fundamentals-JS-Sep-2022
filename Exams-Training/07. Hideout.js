function f2(params) {
    let text = params.shift();
    let escape = String.fromCharCode(92);

    // function escapeRegex(string) {
    //     return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    // }

    for (const line of params) {
        [char, count] = line.split(' ');
        // count = Number(count);
        let regexSpecial = /[/\\.?!|[]{}@#$%^&*()_+-=]/;
        // RegExp.escape();

        let matchSpecial = char.match(regexSpecial);

        if (matchSpecial) {
            char = escape + char;
        }
        // console.log(char);
        let regexp = new RegExp(`[${char}]{${count},}`);

        let match = text.match(regexp);
        if (match) {
            let index = match.index;
            let size = match[0].length;
            console.log(`Hideout found at index ${index} and it is with size ${size}!`);
            break;
        }
    }
}

// JUDGE
f2(
    [
        'asd@@asd***asdasdsad123%4521Asdsad************ASssda',
        '& 3',
        '* 20',
        '* 10',
        '* 2'
    ]
);