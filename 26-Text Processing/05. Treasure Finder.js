function f2(params) {
    let key = params.shift().split(' ').map(Number);
    line = params.shift();

    while (line !== 'find') {
        line = line.split('');
        let indexKey = 0;
        let result = [];
        for (const char of line) {
            let newAscii = char.charCodeAt() - key[indexKey];
            result.push(String.fromCharCode(newAscii));

            indexKey++;
            if (indexKey === key.length) {
                indexKey = 0;
            }
        }
        result = result.join('');
        let regexp1 = /[&]\w+[&]/g;
        let regexp2 = /[<]\w+[>]/g;
        let type = result.match(regexp1)[0];
        type = type.split('');
        type.shift();
        type.pop();
        type = type.join('');

        let coordinates = result.match(regexp2)[0];
        coordinates = coordinates.split('');
        coordinates.shift();
        coordinates.pop();
        coordinates = coordinates.join('');

        console.log(`Found ${type} at ${coordinates}`);
        line = params.shift();
    }

}

//Judge__________________
f2(
    [
        "1 4 2 5 3 2 1",
        `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
        "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
        "'stj)>34W68Z@",
        "find"
    ]
);