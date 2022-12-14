function f2(params) {
    let key = Number(params.shift());
    let line = params.shift();

    while (line !== 'end') {
        // line = line.split('').map(x => x = String.fromCharCode(x.charCodeAt() - key)).join('');
        let regexp = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>[G|N])!/;
        let firstMatch = regexp.exec(line);
        if (firstMatch && firstMatch.groups.type === 'G') {
            console.log(firstMatch.groups.name);
        }
        // console.log(line);
        line = params.shift();
    }
}

// JUDGE
f2([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end',
]);