function f2(params) {
let person=JSON.parse(params); 

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

//console.log(person);
}

//-----------------
f2(
    '{"name": "George", "age": 40, "town": "Sofia"}'
);



//console.log(`-----------------`);