function f2(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };
let string=JSON.stringify(person);
console.log(JSON.stringify(person));

let personAsObject=JSON.parse(string); 
//console.log(personAsObject);
}

//-----------------
f2(
    'George', 'Jones', 'Brown'
);



//console.log(`-----------------`);