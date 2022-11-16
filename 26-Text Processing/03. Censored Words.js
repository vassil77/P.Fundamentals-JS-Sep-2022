function f2(sentence, word) {
    let result = sentence.split(word).join('*'.repeat(word.length));


    console.log(result);
}

//Judge__________________
f2(
    'Find the hidden word', 'hidden'
    );



//console.log(`-----------------`);