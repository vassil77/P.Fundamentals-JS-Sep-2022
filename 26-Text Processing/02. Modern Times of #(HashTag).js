function f2(params) {

    let result = params.split(' ').filter(x => x.startsWith('#') && x.length > 1 ).map(x => x = x.slice(1)).filter(x =>/^[a-zA-Z]+$/.test(x));


    console.log(result.join('\n'));
}

//Judge__________________
f2(
    'The symbol # is known #variously in English-speaking #regions as the #number sign');



//console.log(`-----------------`);