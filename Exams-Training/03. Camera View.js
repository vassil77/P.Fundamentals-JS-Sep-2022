function f2(params) {
    let [mSkip, nTake] = params.shift().split(' ').map(Number);

    let textArr = params.shift().split('|<');
    let views = [];

    for (let i = 1; i < textArr.length; i++) {
        let currentView = textArr[i].slice(mSkip, mSkip + nTake);
        views.push(currentView);
    }


    console.log(views.join(', '));
}

// JUDGE
f2([
    '0 5',
    '|>invalid|<beach|noMoreCameras'

]);