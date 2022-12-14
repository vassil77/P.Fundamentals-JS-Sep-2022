function f2(params) {
    let line = params.shift();
    let regex = /(?<key>[^&?]+)=(?<value>[^&?]+)/g;
    // let regexSpecial=/\+|%20/g;


    while (line !== 'END') {
        let pairs = {};
        line = line.replace(/\+|%20/g, ' ');
        let matches = [...line.matchAll(regex)];
        for (const match of matches) {
            let currentKey = match.groups.key.trim().replace(/[\s]{2,}/g, ' ');
            let currentValue = match.groups.value.trim().replace(/[\s]{2,}/g, ' ');

            if (!pairs.hasOwnProperty(currentKey)) {
                pairs[currentKey] = [];
            }
            pairs[currentKey].push(currentValue);
        }
        let output = '';
        for (let key in pairs) {
            output += key + "=[" + pairs[key].join(', ') + "]";
        }
        console.log(output);
        // console.log(matches[0].groups.value);
        line = params.shift();
    }



}

// JUDGE
f2([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php',
    'END'
]);