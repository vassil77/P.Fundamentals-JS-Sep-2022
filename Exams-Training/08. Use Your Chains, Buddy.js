function f2(params) {
    let text = params.shift();
    let regexp = /(?<=<p>)(.*?)(?=<\/p>)/g;
    let matches = text.match(regexp);
    // console.log(matches);
    let result = [];
    for (let match of matches) {
        // let regexToSpace=/[^a-z0-9]/g;
        match = match.replace(/[^a-z0-9]/g, ' ');
        match = match.replace(/[\s]{2,}/g, ' ');
        match = match.split('');
        // console.log(match); //test
        for (let i = 0; i < match.length; i++) {
            if (match[i] !== ' ') {
                if (match[i].charCodeAt() >= 97 && match[i].charCodeAt() <= 109) {
                    match[i] = String.fromCharCode(match[i].charCodeAt() + 13);
                } else if (match[i].charCodeAt() >= 110 && match[i].charCodeAt() <= 122) {
                    match[i] = String.fromCharCode(match[i].charCodeAt() - 13);
                }
            }
        }

        match = match.join('');
        result.push(match);
    }
    console.log(result.join(''));

}

// JUDGE
f2([
    '<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>'

]);