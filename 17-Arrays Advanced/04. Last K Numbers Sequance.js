function f2(n,k) {
let seq=[1];
for (let i = 0; i < n-1; i++) {
    let length=Math.min(seq.length,k);
    let sum =0;
    for (let j = seq.length-length; j < seq.length; j++) {
        sum+=seq[j];
        
    }
    seq.push(sum);
}
console.log(seq.join(' '));
}

//-----------------
f2 (
    8, 2
    );



//console.log(`-----------------`);