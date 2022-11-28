function f2(params) {
    let text = params.shift();
    // let regex = /([a-zA-Z0-9]+([\.\-_]*[a-zA-Z0-9]+)*)@([a-zA-Z]+([\-]*[a-zA-Z]+)*(\.[a-zA-Z]+([\-][a-zA-Z])*)+)/g;
    let regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))/g;//(\b|(?=\s))
//(^|(?<=\s))

    let matches = text.match(regex);
    if (matches) {
        for (const match of matches) {
            console.log(match);
        }
    }
    // console.table(matches);
}

// JUDGE
f2([

    // 'Please contact us at: support@github.com.'
    // 'Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'
    'Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.'
    // 'Please contact us at: suppor'


]);