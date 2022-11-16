function f2(params) {

    // let pattern = /(([A-Za-z0-9]+([\.\-_]?[A-Za-z0-9])*)@([A-Za-z]+([\-]?[A-Za-z]+)*([\.]{1}[a-z]+)+))/g;
    let pattern = /(?<=\s)(?<user>(?![_])[A-za-z0-9]+(?:[\.\-_][A-za-z0-9]+)*)@(?<host>[a-zA-Z]+(?:[\-][a-zA-z]+)*(?:\.[a-zA-Z]+(?:[\-][a-zA-Z]+)*)*\.[a-z]+)/g;
    let matches = params.match(pattern);
    if (matches !== null) {

        for (const email of matches) {
            console.log(email);
        }
    }
}

//Judge__________________
f2(

'"adam@helloworld", "adam@.unknown.soft.", "adam@invalid-host-", "adam@invalid-"'

    );