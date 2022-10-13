function f2(params) {
    let input = params;
    let food = Number(input.shift())*1000;
    let hay = Number(input.shift())*1000;
    let cover = Number(input.shift())*1000;
    let weight = Number(input.shift())*1000;

    let needFood = 300;
    let needHay = 0;
    let needCover = 0;
    let dayCounter = 0;

    while (needFood <= food && needHay <= hay && needCover <= cover) {
        dayCounter++;
        food -= needFood;
        hay -= needHay;
        cover -= needCover;

        if (dayCounter % 2 === 1) {
            needHay = 0.05 * (food-300);
        }else{
            needHay=0;
        }
        if (dayCounter % 3 === 1) {
            needCover = weight / 3;
        }else{
            needCover=0;
        }

        if (dayCounter === 30) {
            break;
        }
    }

    //console.log(dayCounter);//test

    if (dayCounter === 30) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    } else {
        console.log(`Merry must go to the pet store!`);
    }
}

//-----------------
f2
(["10", 
"5", 
"5.2", 
"1"])

;