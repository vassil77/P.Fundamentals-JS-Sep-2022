function f2([string, array]) {
    function findWord(length, wordsArr) {
        for (const el of wordsArr) {
            if (el.length === length) {
                return el;
            }
        }
    }


    let regexp = /[_]+/g;
    let matches = string.match(regexp);
    let result = string.slice();
    for (const hole of matches) {
        result = result.replace(hole, findWord(hole.length, array));
    }
    console.log(result);
}

//Judge__________________
f2(
    [
        'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
    ]

);