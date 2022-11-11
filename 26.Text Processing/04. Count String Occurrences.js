function f2(sentence,word) {

let result=sentence.split(' ').filter(x=>x===word).length;

console.log(result);
}

//Judge__________________
f2 (
    'This is a word and it also is a sentence',
'is'
    );



//console.log(`-----------------`);