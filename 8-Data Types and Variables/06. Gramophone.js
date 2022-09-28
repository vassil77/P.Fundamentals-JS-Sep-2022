function f2(band, album, song) {

    let rotations = album.length * band.length * song.length / 2 / 2.5;
    rotations = Math.ceil(rotations);
    console.log(`The plate was rotated ${rotations} times.`);


}

f2(
    'Rammstein', 'Sehnsucht', 'Engel'
);



//console.log(`-----------------`);