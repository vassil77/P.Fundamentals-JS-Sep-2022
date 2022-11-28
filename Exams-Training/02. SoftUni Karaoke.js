function f2(params) {

    let allParticipants = params.shift().split(', ').map(x => x.trim());
    let allSongs = params.shift().split(', ').map(x => x.trim());

    let listParticipants = {};
    let noAwords = true;

    let line = params.shift();

    while (line !== 'dawn') {
        let [participant, song, award] = line.split(', ').map(x => x.trim());

        if (allParticipants.includes(participant) && allSongs.includes(song)) {

            if (!listParticipants.hasOwnProperty(participant)) {
                listParticipants[participant] = [];
            }
            if (!listParticipants[participant].includes(award)) {
                listParticipants[participant].push(award);
                noAwords = false;
            }
        }
        // console.log(listParticipants);
        line = params.shift();
    }
    if (noAwords) {
        console.log(`No awards`);
    } else {


        //Sorting
        let sortedParticipants = Object.entries(listParticipants)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1].length - a[1].length);

        for (const participant of sortedParticipants) {
            console.log(`${participant[0]}: ${participant[1].length} awards`);
            let sortedAwards = participant[1].sort((a, b) => a.localeCompare(b));
            for (const award of sortedAwards) {
                console.log(`--${award}`);
            }
        }
        console.table(sortedParticipants);
    }
    
}

// JUDGE
f2(
    [
        'Trifon, Vankata, Gesha',
        "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
        "Gesha, Bon Jovi - It's my life, Best Rock",
        "Vankata, Dragana - Kukavice, Best Srabsko",
        "Vankata, Dragana - Kukavice, Best Srabsko",
        "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
        "Vankata, PHP Web, Educational 101",
        "dawn"
    ]


);