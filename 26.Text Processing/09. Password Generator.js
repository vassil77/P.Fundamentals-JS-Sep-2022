function f2([string1, string2, string3]) {

    let password = string1.concat(string2);
    password = password.split('');
    let thirdArray = string3.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // console.log(password.join(''));
    for (let i = 0; i < password.length; i++) {
        if (vowels.indexOf(password[i]) >= 0) {
            if (thirdArray.length === 0) {
                thirdArray = string3.split('');
            }
            password[i] = thirdArray.shift().toUpperCase();
        }

    }

    // console.log(password.join(''));
    password.reverse();
    // console.log(password.join(''));
    console.log(`Your generated password is ${password.join('')}`);
}

//Judge__________________
f2(
    [
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]

);