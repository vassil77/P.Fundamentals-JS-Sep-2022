function f2(params) {

    let catalogue = {};


    for (let line of params) {
        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');
            // console.log(genre);
            if (!catalogue.hasOwnProperty(id)) {
                catalogue[id] = {};
                catalogue[id].genre = genre;
            }
            continue;
        }

        if (line.includes(': ')) {
            let [title, author, genre] = line.split(': ').join(', ').split(', ');
            // console.log(genre);
            for (const id in catalogue) {
                if (catalogue[id].genre === genre) {
                    catalogue[id][title] = author;
                }
            }
            continue;
        }

    }
    //Sorting

    for (let id in catalogue) {
        let sortedBooks = Object.entries(catalogue[id]).sort((a, b) => a[0].localeCompare(b[0]));
        catalogue[id] = Object.fromEntries(sortedBooks);
    }

    let sortedArr = Object.entries(catalogue).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    // console.log(...sortedArr);
    // console.log(sortedArr[2][1]);
    // console.log(Object.entries(sortedArr[2][1]).length);

    // catalogue = Object.fromEntries(sortedArr);

    //New Print
    for (const el of sortedArr) {
        console.log(`${el[0]} ${catalogue[el[0]].genre}: ${Object.entries(el[1]).length-1}`);

        for (let book in catalogue[el[0]]) {
            if (book !== 'genre') {
                console.log(`--> ${book}: ${catalogue[el[0]][book]}`);
            }
        }


    }



    //PRINT
    // for (let id in catalogue) {
    //     console.log(`${id} ${catalogue[id].genre}: ${Object.entries(catalogue[id]).length-1}`);

    //     for (let book in catalogue[id]) {
    //         if (book !== 'genre') {
    //             console.log(`--> ${book}: ${catalogue[id][book]}`);
    //         }
    //     }
    // }



}

//-----------------
f2(
    ['1 -> mystery', '2 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Lions and Rats: Gabe Roads, history',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi'
    ]
);



//console.log(`-----------------`);