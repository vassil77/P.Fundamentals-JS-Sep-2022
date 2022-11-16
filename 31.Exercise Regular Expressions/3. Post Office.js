function f2(params) {
    // let params = " " + input + " ";
    params+="";
    let partList = params.split('|');
    partList[2] = " " + partList[2] + " ";

    let regexCapital = /(#[A-Z]+#)|(\$[A-Z]+\$)|(%[A-Z]+%)|(\*[A-Z]+\*)|(&[A-Z]+&)/g;
    let capitals = partList[0].match(regexCapital)[0].split('');
    capitals.shift();
    capitals.pop();

    for (const capital of capitals) {
        let regexLength = new RegExp(`${capital.charCodeAt()}:[0-9]{2}`, 'g');
        let wordLength = Number(partList[1].match(regexLength)[0].split(':').pop());

        let regexWord = new RegExp(`[ ]${capital}[^ ]{${wordLength}}[ ]`, 'g');
        let word = partList[2].match(regexWord)[0].trim();

        console.log(word);
    }
}

//Judge__________________
f2(

'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'

);