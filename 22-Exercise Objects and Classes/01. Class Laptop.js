class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
        this.price = 800 - info.age * 2 + quality * 0.5;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
        this.price -= 0.5;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
        this.price -= 0.5;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }



}


//-----------------

let info = {
    producer: "Lenovo",
    age: 1,
    brand: "Legion"
};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
laptop.turnOn();
laptop.turnOff();
console.log(laptop.isOn);