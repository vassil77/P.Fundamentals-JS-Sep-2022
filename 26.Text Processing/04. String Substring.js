function f2(word, text) {
    let wordLower = word.toLowerCase();
    let textArrLength = text.toLowerCase().split(' ').filter(x => x === wordLower).length;

// console.log(textArrLength);
    if (textArrLength > 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }


}

//Judge__________________
f2(
    'javascript',
    'JavaScript is the best programming language'
);