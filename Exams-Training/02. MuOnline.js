function f2(params) {
    let room = params.split("|");
    let health = 100;
    let bitcoins = 0;
    let isGameOver = false;
    for (let i = 0; i < room.length; i++) {
        let array = room[i].split(" ");
        let command = array[0];
        let points = Number(array[1]);
        

        switch (command) {
            case "potion":
                let heal = Math.min(100 - health, points);
                health += heal;
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;


            case "chest":
                bitcoins += points;
                console.log(`You found ${points} bitcoins.`);
                break;

            default:
                health -= points;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    isGameOver = true;
                    console.log(`Best room: ${i+1}`);
                }
                break;
        }
        if (isGameOver) {
            break;
        }

    }

    if (!isGameOver) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }





}

//-----------------
f2(
    "cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"
    );