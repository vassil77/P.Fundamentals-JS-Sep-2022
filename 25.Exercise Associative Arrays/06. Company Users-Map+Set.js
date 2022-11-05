function f2(params) {

    let companies = new Map();//Map

    for (let line of params) {
        let employees = new Set();//Set
        
        let [name, employe] = line.split(' -> ');


        if (companies.has(name)) {
            employees = companies.get(name);
            employees.add(employe);
            companies.set(name, employees);
            // console.log(companies);
        } else {
            employees.add(employe);
            companies.set(name, employees);
            // console.log(companies);
        }

        // console.log(companies);
    }

    let entries = Array.from(companies.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(entries);//test
    for (let company of entries) {
        console.log(company[0]);
        for (const el of company[1]) {
            console.log(`-- ${el}`);
        }
    }

}

//-----------------
f2(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
);



//console.log(`-----------------`);