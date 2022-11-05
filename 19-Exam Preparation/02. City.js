function cityInfo(city) {
    let entries = Object.entries(city);//creates an Array: [key,value],...,[key,value],...,
    //console.log(...entries);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

//-----------------
cityInfo ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});



//console.log(`-----------------`);