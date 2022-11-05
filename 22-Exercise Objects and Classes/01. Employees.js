function f2(params) {
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }
    let listEmpl = [];
    for (let i = 0; i < params.length; i++) {
        let name = params[i];
        let number = name.length;
        let currentEmployee = new Employee(name, number);
        listEmpl.push(currentEmployee);
    }

    listEmpl.forEach((i)=>console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));

}

//-----------------
f2(
    [
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
);



//console.log(`-----------------`);