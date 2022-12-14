function f2(params) {
    let word = params.shift();
    let text = params.shift();
    let regexSpecial = /[\.\!\?]/g;
    text = text.split(regexSpecial);

    let regexp = new RegExp(`\\b${word}\\b`);

    for (let sentence of text) {
        sentence = sentence.trimStart();
        // console.log(sentence);
        let match = sentence.match(regexp);
        // console.log(match);
        if (match) {
            console.log(sentence);
        }
    }
}

// JUDGE
f2([

    'to',
    "Welcome to SoftUni! You will learn programming, algorithms, problem solving and software technologies. You need to allocate for study 20-30 hours weekly. Good luck! I am fan of Motorhead. To be or not to be - that is the question. TO DO OR NOT?"

]);