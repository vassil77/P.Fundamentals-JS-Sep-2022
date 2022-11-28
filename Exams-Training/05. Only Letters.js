function f2(params) {
    let message = params[0];
    // let regexNum = /\d+/g;
    let regexLetter = /(?<num>\d+)(?<letter>[A-z])/g;
    let regexFirst = /(?<num>\d+)(?<letter>[A-z])/;

    let numLetter = message.match(regexLetter);
    if (numLetter) {


        for (let el of numLetter) {
            let replacement = el.split('').pop().repeat(2);
            message = message.replace(regexFirst, replacement);
        }
        console.log(message);
    } else {
        console.log(message);
    }


}

// JUDGE
f2(
    ['BewareForTheEnd']
);