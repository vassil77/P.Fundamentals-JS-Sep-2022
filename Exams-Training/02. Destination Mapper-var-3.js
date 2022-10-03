function destination(input) {
    let pattern =  /([=\/])([A-Z][A-Za-z]{2,})\1/g;
 
    let locations = [];
    let points = 0;
 
    while ((match = pattern.exec(input)) != null) {
        let wordPattern = /\w+/g;
        let words = wordPattern.exec(match[0]);
        locations.push(words[0]);
    }
    for (let element of locations) {
        points += element.length;
    }
    console.log(`Destinations: ${locations.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
 
destination

//("=Hawai=/\Cyprus\/=Invalid/invalid==i5valid=/I5valid/=i=")
("=Hawai=/Cyprus\a\\wai/=Invalid/invalid==i5valid=/I5valid/=i=")
// judge 100/100
;