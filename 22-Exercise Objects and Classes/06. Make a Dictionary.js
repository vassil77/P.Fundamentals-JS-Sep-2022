function f2(params) {

    let dictionary = [];

    for (let i = 0; i < params.length; i++) {
        let object = JSON.parse(params[i]);
        let currentTerm = {};
        currentTerm.term = Object.keys(object)[0];
        currentTerm.definition = Object.values(object)[0];

        for (let j = 0; j < dictionary.length; j++) {
            if (dictionary[j].term === currentTerm.term) {
                index = j;
                dictionary.splice(index, 1);
                break;
            }
        }
        dictionary.push(currentTerm);
    }



    dictionary.sort((a, b) => {
        let fa = a.term.toLowerCase(),
            fb = b.term.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

    dictionary.forEach((i) => console.log(`Term: ${i.term} => Definition: ${i.definition}`));

}

//-----------------
f2(
    [
        '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
        '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
        '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
        '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
        '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
);



//console.log(`-----------------`);