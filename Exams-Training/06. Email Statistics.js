function f2(params) {
    params.shift();
    let regex = /^(?<username>[A-Za-z]{5,})@(?<domain>[a-z]{3,}\.(com|bg|org))$/;
    let listDomains = {};

    for (let line of params) {
        let match = line.match(regex);

        if (match && match[0] === line) {
            let username = match.groups.username;
            let domain = match.groups.domain;
            if (!listDomains.hasOwnProperty(domain)) {
                listDomains[domain] = [];
            }

            if (!listDomains[domain].includes(username)) {
                listDomains[domain].push(username);
            }
        }
    }

    //Sorting
    let sortedArr = Object.entries(listDomains).sort((a, b) => b[1].length - a[1].length);

    for (const [domain, listUsers] of sortedArr) {
        console.log(domain + ':');
        for (const user of listUsers) {
            console.log(`### ${user}`);
        }
    }
    // console.log(listDomains);
    // console.table(listDomains);

}

// JUDGE
f2(
    [
        '5',
        'Pesho@abv.bg',
        'JohnDowe@gmail.com',
        'Maria@gmail.com',
        'invalid123@dir.bg',
        'nakov@yahoo.com'

    ]
);