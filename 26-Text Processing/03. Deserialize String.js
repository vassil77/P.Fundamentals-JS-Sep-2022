function f2(params) {

    let line = params.shift();
    let output = [];
    while (line !== 'end') {
        line = line.split(':');
        let char = line.shift();
        line = line[0].split('/');

        for (const index of line) {
            output[index]=char;
        }
        line = params.shift();
    }
    console.log(output.join(''));
}

//Judge__________________
f2(
    ['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
);