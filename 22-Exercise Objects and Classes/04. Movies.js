function f2(params) {
    let movieList = [];

    // class Movie {
    //      constructor(name, director, date) {
    //         this.name = name;
    //         this.director = director;
    //         this.date = date;
    //     }
    // }

    for (let i = 0; i < params.length; i++) {
        let line = params[i].split(' ');
        let index;
        if (line[0] === 'addMovie') {
            line.shift();
            movieName = line.join(' ');
            let currentMovie = {};
            currentMovie.name = movieName;
            movieList.push(currentMovie);

        } else if (line.indexOf('directedBy') !== -1) {
            index = line.indexOf('directedBy');
            movieName = line.slice(0, index).join(' ');
            directorName = line.slice(index + 1).join(' ');
            for (const elem of movieList) {
                if (elem.name === movieName) {
                    elem.director = directorName;
                }
            }

        } else if (line.indexOf('onDate') !== -1) {
            index = line.indexOf('onDate');
            movieName = line.slice(0, index).join(' ');
            date = line.slice(index + 1).join(' ');
            for (const elem of movieList) {
                if (elem.name === movieName) {
                    elem.date = date;
                }
            }
        }



    }

    for (const elem of movieList) {
        if (elem.name!==undefined&&elem.director!==undefined&&elem.date!==undefined) {
            console.log(JSON.stringify(elem));
        }
    }

    //console.log(...movieList);




}

//-----------------
f2(
    [
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
        );



//console.log(`-----------------`);