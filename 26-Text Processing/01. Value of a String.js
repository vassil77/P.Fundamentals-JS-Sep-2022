function f2([string, caseLU]) {
    let sum = 0;
    switch (caseLU) {
        case 'UPPERCASE':
            string = string.split('');
            for (const char of string) {
                if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
                    sum += char.charCodeAt();
                }
            }
            break;


        case 'LOWERCASE':
            string = string.split('');
            for (const char of string) {
                if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
                    sum += char.charCodeAt();
                }
            }
            break;


    }


    console.log(`The total sum is: ${sum}`);
}

//Judge__________________
f2(
    ['AC/DC',
        'UPPERCASE'
    ]
);