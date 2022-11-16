function f2(params) {
    let lines = params.split(' ');
    let keyList = {
        fragments: 0,
        shards: 0,
        motes: 0,

    };
    let junkList = {};
    // console.log(lines);
    let n = lines.length;
    for (let i = 0; i < n; i += 2) {
        let quantity = Number(lines.shift());
        let material = lines.shift().toLowerCase();
        // console.log(quantity);
        // console.log(material);
        switch (material) {
            case 'shards':
                if (keyList.hasOwnProperty(material)) {
                    keyList[material] += quantity;
                } else {
                    keyList[material] = quantity;
                }
                break;

            case 'fragments':
                if (keyList.hasOwnProperty(material)) {
                    keyList[material] += quantity;
                } else {
                    keyList[material] = quantity;
                }
                break;

            case 'motes':
                if (keyList.hasOwnProperty(material)) {
                    keyList[material] += quantity;
                } else {
                    keyList[material] = quantity;
                }
                break;

            default:
                if (junkList.hasOwnProperty(material)) {
                    junkList[material] += quantity;
                } else {
                    junkList[material] = quantity;
                }
                break;
        }

        if (keyList.shards >= 250) {
            console.log(`Shadowmourne obtained!`);

            keyList.shards -= 250;
            let entries = Object.entries(keyList).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries) {
                console.log(`${material}: ${quantity}`);
            }

            let entries2 = Object.entries(junkList).sort((a, b) => a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries2) {
                console.log(`${material}: ${quantity}`);
            }
            break;
        }

        if (keyList.fragments >= 250) {
            console.log(`Valanyr obtained!`);

            keyList.fragments -= 250;
            let entries = Object.entries(keyList).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries) {
                console.log(`${material}: ${quantity}`);
            }

            let entries2 = Object.entries(junkList).sort((a, b) => a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries2) {
                console.log(`${material}: ${quantity}`);
            }
            break;
        }

        if (keyList.motes >= 250) {
            console.log(`Dragonwrath obtained!`);

            keyList.motes -= 250;
            let entries = Object.entries(keyList).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries) {
                console.log(`${material}: ${quantity}`);
            }

            let entries2 = Object.entries(junkList).sort((a, b) => a[0].localeCompare(b[0]));
            for (const [material, quantity] of entries2) {
                console.log(`${material}: ${quantity}`);
            }
            break;
        }



    }


    // console.log(keyList);
    // console.log(junkList);

}

//-----------------
f2(
    '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');



//console.log(`-----------------`);