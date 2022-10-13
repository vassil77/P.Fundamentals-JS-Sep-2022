function f2(a, b) {
    let charCodeA = a.charCodeAt();
    let charCodeB = b.charCodeAt();
    let start = Math.min(charCodeA, charCodeB);
    let end = Math.max(charCodeA, charCodeB);
let result='';
    for (let i = start+1; i <end; i++) {
        
        result+=String.fromCharCode(i)+' ';
    }
console.log(result);



}

//-----------------
f2(
    'C',
    '#'
);



//console.log(`-----------------`);