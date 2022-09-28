function f2(r,h) {
let volume=1/3*Math.PI*Math.pow(r, 2)*h;
console.log(`volume = ${volume.toFixed(4)}`);

let area=Math.PI*r*(r+Math.pow((Math.pow(r, 2)+Math.pow(h, 2)),0.5));
console.log(`area = ${area.toFixed(4)}`);


}

f2 (
    3,
5
    );



//console.log(`-----------------`);