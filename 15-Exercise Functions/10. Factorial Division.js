function f2(a,b) {
    let factA=1;
for (let i = 1; i <= a; i++) {
   factA*=i;
    
}

let factB=1;
for (let i = 1; i <= b; i++) {
   factB*=i;
    
}

console.log((factA/factB).toFixed(2));



}

//-----------------
f2 (
    6,2
    );



//console.log(`-----------------`);