function f2(params) {
    let original=params.shift();
    let replaced=(original.split("Hawai")).join("Bulgaria");

console.log(original);
console.log(replaced);
}

//-----------------
f2 (
    ["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]
    );



//console.log(`-----------------`);