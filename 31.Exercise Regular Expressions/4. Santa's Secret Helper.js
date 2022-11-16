function f2(params) {
    let key = Number(params.shift());
    let line = params.shift();

    while (line !== 'end') {
        line = line.split('').map(x => String.fromCharCode(x.charCodeAt() - key)).join('');
        let regex = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[G|N]{1})!/g;

        let childInfo;
        if ((childInfo = regex.exec(line))) {
            let name = childInfo.groups.name;
            let behavior = childInfo.groups.behavior;
            if (behavior==="G") {
                console.log(name);
            }
        }
        // console.log(line);
        line = params.shift();
    }
}

//Judge__________________
f2(
    [
        '3',
'N}eideidmk$\'(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end'
]
);