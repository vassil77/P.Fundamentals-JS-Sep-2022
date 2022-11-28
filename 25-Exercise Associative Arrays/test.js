// console.log((0.1).toFixed(20));
// console.log((0.1+0.2-0.2)===0.1);
let array=[[5,5,10], [5,7,8], [2,9,7], [2,8,9]];
// console.table(array);
array.sort((a,b)=>{
    if ((a[0]-b[0])!==0) {
        return a[0]-b[0];
    } else {
        return a[1]-b[1];
    }
});
// console.table(array);
let cat={name:'Tom', age:5};
let check=cat.hasOwnProperty('age');
// console.log(check);

// for(let [key, value] of Object.entries(cat)) {
//     console.log(`${key} => ${value}`);
//   }

  let listMap=new Map();
  listMap.set(1,'one');
  listMap.set(2,'two');

  for(let [key, value] of listMap) {
    console.log(`${key} => ${value}`);
  }
  

  