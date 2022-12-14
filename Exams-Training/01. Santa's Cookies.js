function f2(params) {
    let n = params.shift();
    let totalBoxes = 0;
    for (let i = 0; i < n; i++) {
        let flour = Number(params.shift());
        let sugar = Number(params.shift());
        let cocoa = Number(params.shift());

        let flourCups = Math.floor(flour / 140);
        let sugarSpoons = Math.floor(sugar / 20);
        let cocoaSpoons = Math.floor(cocoa / 10);

        let cookiesPerBake = (140 + 10 + 20) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / 25;
        cookiesPerBake = Math.floor(cookiesPerBake);
        let boxesPerBatch = Math.floor(cookiesPerBake / 5);

        if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
            console.log(`Ingredients are not enough for a box of cookies.`);
        } else {
            console.log(`Boxes of cookies: ${boxesPerBatch}`);
            totalBoxes += boxesPerBatch;
        }
    }
    console.log(`Total boxes: ${totalBoxes}`);
}

// JUDGE
f2([
    1,
    1400,
    200,
    100
]);