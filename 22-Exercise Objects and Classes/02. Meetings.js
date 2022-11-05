function f2(params) {
    let list=new Map();

    for (const line of params) {
        let [key,value]=line.split(' ');
        if (list.has(key)) {
            console.log(`Conflict on ${key}!`);
        } else {
            console.log(`Scheduled for ${key}`);
            list.set(key, value);
        }
    }

    for(let [key, value] of list) {
        console.log(`${key} -> ${value}`);
      }
      




}

//-----------------
f2(
    ['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);



//console.log(`-----------------`);