function f2(params) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of params) {
        let [catName, age] = line.split(' ');

        let currentCat = new Cat(catName, age);
        currentCat.meow();
    }
}

//-----------------
f2(
    [
        'Mellow 2',
        'Tom 5'
    ]
);



//console.log(`-----------------`);