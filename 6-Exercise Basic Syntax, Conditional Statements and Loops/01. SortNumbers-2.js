function SortNumbers(a,b,c) {

    points=[a,b,c];
    sorted = points.sort(function (a, b) {
        return b - a;
    });

    console.log(sorted[0]);
    console.log(sorted[1]);
    console.log(sorted[2]);
}

SortNumbers(
    2,
    1,
    3
);



//console.log(`-----------------`);