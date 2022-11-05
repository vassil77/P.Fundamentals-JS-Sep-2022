                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                let names = ['Peter', 'Michel', 'Jana', 'Ivan', 'Jordan'];
                let places = ['Sofia', 'Plovdiv', 'Varna', 'Montana', 'Haskovo'];
                let verbs = ['eats', 'holds', 'sees', 'plays with'];
                let nouns = ['stones', 'cake', 'apple', 'laptop', 'bikes'];
                let adverbs = ['slowly', 'diligently', 'warmly', 'sadly', 'rapidly'];
                let details = ['near the river', 'at home', 'in the park', 'in the desert', 'in the restaurant'];

                function getRandomWord(array) {
                    let word = array[Math.floor(Math.random() * array.length)];
                    return word;
                }

                let randomName = getRandomWord(names);
                let randomPlace = getRandomWord(places);
                let randomVerb = getRandomWord(verbs);
                let randomNouns = getRandomWord(nouns);
                let randomAdverb = getRandomWord(adverbs);
                let randomDetail = getRandomWord(details);

                let who = `${randomName} from ${randomPlace}`;
                let action = `${randomAdverb} ${randomVerb} ${randomNouns}`;
                let sentence = `${who} ${action} ${details}`;

                console.log(`Hello, this is your first random-generated sentence:`);
                console.log(sentence);


                let recursiveAsyncReadline = function () {
                        readline.question('Click [enter] to generate a new one', string =>{