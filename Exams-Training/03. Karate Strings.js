function f2(params) {
    let start = params[0].split('');
    let result = [];
    let strength = 0;

    for (let i = 0; i < start.length; i++) {
        if (start[i] != ">") {
            if (strength===0) {
                result.push(start[i]);
            } else {
                strength--;
            }
        } else {
            strength += Number(start[i + 1]);
            result.push(start[i]);
        }
    }

    // console.log(start);
    console.log(result.join(''));
}

// JUDGE
f2(
    ['pesho>2sis>1a>2akarate>4hexmaster']
);