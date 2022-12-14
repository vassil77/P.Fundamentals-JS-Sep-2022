function f2(params) {
    let pairs = params.shift().split(' | ');
    let words = params.shift().split(' | '); //from teacher to test
    let command = params.shift();

    let dictionary = {};

    for (const pair of pairs) {
        let [word, definition] = pair.split(': ');

        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        dictionary[word].push(definition);
    }


    switch (command) {
        case 'Test':
            for (let word of words) {
                if (dictionary.hasOwnProperty(word)) {
                    console.log(`${word}:`);
                    for (let definition of dictionary[word]) {
                        console.log(` -${definition}`);
                    }
                }
            }
            break;

        case 'Hand Over':
            let result = [];
            for (let word in dictionary) {

                result.push(word);

            }
            console.log(result.join(' '));



            break;
    }


    // console.log(dictionary);
    // console.table(dictionary);
}

// JUDGE
f2
(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])



;