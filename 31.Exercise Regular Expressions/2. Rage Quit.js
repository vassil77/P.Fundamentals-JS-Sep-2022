function f2(params) {
    let regexLetters = /[\D]+/g;
    let regexDigits = /[\d]+/g;
    let result = "";
    params += "";
    params = params.toUpperCase();
    let lettersArr = params.match(regexLetters);
    let digitArr = params.match(regexDigits).map(Number);

    // let allLetters = lettersArr.join('').split('');


    for (let i = 0; i < lettersArr.length; i++) {
        for (let j = 0; j < digitArr[i]; j++) {
            result += lettersArr[i];
        }

    }
    let set = new Set(result.split(''));



    console.log(`Unique symbols used: ${set.size}`);
    console.log(result);
}

//Judge__________________
f2(

'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'

);