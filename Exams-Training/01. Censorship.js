function f2(params) {
    let word = params.shift();
    let sentence = params.shift();
    let replacement = '*'.repeat(word.length);

    let regExp = new RegExp(`${word}`, 'g');

    let result = sentence.replace(regExp, replacement);
    console.log(result);
}

// JUDGE
f2(
    [
        'Java',
        'I love Java and JavaScript, but I hate Rxjava'


    ]
);