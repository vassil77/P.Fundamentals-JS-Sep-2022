function f2(words, template) {
    let wordArr = words.split(', ');
    let sentence = template.split(' ');

    for (let word of wordArr) {
        // console.log(word);
        for (let i = 0; i < sentence.length; i++) {
            // console.log('*'.repeat(word.length));
            if (sentence[i] === ('*'.repeat(word.length))) {
                sentence[i] = word;
                // console.log(sentence[i]);
            }

        }

    }

    console.log(sentence.join(' '));

}

//Judge__________________
f2(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);



//console.log(`-----------------`);