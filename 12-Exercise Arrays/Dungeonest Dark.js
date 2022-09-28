function f2(params) {

    let coins = 0;
    let health = 100;

    const room = params[0].split("|");

    for (let i = 0; i < room.length; i++) {

        let currentRoom = room[i].split(" ");
        currentRoom[1] = Number(currentRoom[1]);

        switch (currentRoom[0]) {
            case "potion":
                let oldHealth = health;
                health = Math.min(100, (health + currentRoom[1]));
                console.log(`You healed for ${health-oldHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += currentRoom[1];
                console.log(`You found ${currentRoom[1]} coins.`);
                break;

            default:
                health -= currentRoom[1];
                if (health > 0) {
                    console.log(`You slayed ${currentRoom[0]}.`);
                } else {
                    console.log(`You died! Killed by ${currentRoom[0]}.`);
                    console.log(`Best room: ${i+1}`);
                    i = room.length;
                }
                break;
        }

    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);


    }



}

//-----------------
f2(
    ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
);



//console.log(`-----------------`);