function f2(params) {
    let n = params.shift();
    let extractType = params.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songList = [];
    for (let i = 0; i < n; i++) {
        let [type, name, time] = params.shift().split('_');
        let currentSong = new Song(type, name, time);
        songList.push(currentSong);
    }

    if (extractType === "all") {
        songList.forEach((i) => console.log(i.name));
    } else {
        let filtered = songList.filter((i) => i.type === extractType);
        filtered.forEach((i) => console.log(i.name));
    }


}

//-----------------
f2(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all'
    ]
);



//console.log(`-----------------`);