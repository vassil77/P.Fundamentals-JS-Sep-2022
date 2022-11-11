function f2(params) {
    let leaderList = {};

    for (let line of params) {
        if (line.split(' ').pop() === "arrives") {
            let leader = line.split(' ');
            leader.pop();
            leader = leader.join(" ");
            // console.log(leader);
            leaderList[leader] = {};
            leaderList[leader].totalArmy = 0;
            continue;
        }

        if (line.split(' ').pop() === "defeated") {
            let defeatedLeader = line.split(' ');
            defeatedLeader.pop();
            defeatedLeader = defeatedLeader.join(" ");
            if (leaderList.hasOwnProperty(defeatedLeader)) {
                delete leaderList[defeatedLeader];
            }
            continue;
        }

        if (line.split(': ').length > 1) {
            let leader = line.split(': ').shift();
            line = line.split(': ');
            line = line.pop();
            line = line.split(', ');
            let army = line.shift();
            let count = Number(line.shift());

            if (leaderList.hasOwnProperty(leader)) {
                leaderList[leader][army] = count;
                leaderList[leader].totalArmy += count;
            }
            continue;
        }

        if (line.split(' + ').length > 1) {
            line = line.split(' + ');
            // console.log(line);
            let army = line.shift();
            let count = Number(line.shift());

            for (let leader in leaderList) {
                if (leaderList[leader].hasOwnProperty(army)) {
                    leaderList[leader][army] += count;
                    leaderList[leader].totalArmy += count;
                }
            }
            continue;
        }


    }

    for (let leader in leaderList) {
        let sortedArmy = Object.entries(leaderList[leader]).sort((a, b) => b[1] - a[1]);
        leaderList[leader] = Object.fromEntries(sortedArmy);
    }



    let sortedArr = Object.entries(leaderList).sort((a, b) => b[1].totalArmy - a[1].totalArmy);
    leaderList = Object.fromEntries(sortedArr);

    for (const leader in leaderList) {
        console.log(`${leader}: ${leaderList[leader].totalArmy}`);
        for (const army in leaderList[leader]) {
            if (army !== 'totalArmy') {
                console.log(`>>> ${army} - ${leaderList[leader][army]}`);
            }
        }
    }
}

//-----------------
f2(
    ['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']
);



//console.log(`-----------------`);