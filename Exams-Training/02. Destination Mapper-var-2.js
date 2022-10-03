function destinationMapper(destination) {

    let pattern = /([=/])(?<location>[A-Z][A-z]{2,})\1/g;
    //let pattern = "(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1";
    //let pattern = /([=/])(?<location>[A-Z][A-z]{2,})\1/;
    let count = 0;
    let ourCity = [];

    if (pattern.test(destination)) {
        const ourDest = destination.match(pattern);
        //console.log(destination);                           //test print
       // console.log(ourDest);                            //test print
       // console.log(destination.length);                            //test print

        ourDest.forEach(dest => {
            count += (dest.length - 2);
            ourCity.push(dest.slice(1, (dest.length - 1)));

        });
    }
    //console.log(ourCity);                  //test print
    //console.log("--------------------");                   //test print
    console.log(`Destinations: ${ourCity.join(", ")}`);
    console.log(`Travel Points: ${count}`);

}

destinationMapper
("=Hawai=/Cyprus\a\\wai/=Invalid/invalid==i5valid=/I5valid/=i=")

    //("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
    //("ThisIs some InvalidInput")
// judge 100/100
;