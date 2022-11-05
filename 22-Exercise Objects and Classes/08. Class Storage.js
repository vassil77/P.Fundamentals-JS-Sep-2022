class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.totalCost = 0;
        this.storage = [];
    }



    addProduct(product) {
        this.storage.push(product);
        this.totalCost += product.price * product.quantity;
        this.capacity -= product.quantity;
    }

    getProducts() {
        let result = '';
        for (let i = 0; i < this.storage.length; i++) {
            if (i < this.storage.length - 1) {
                result += JSON.stringify(this.storage[i]) + '\n';
            } else {
                result += JSON.stringify(this.storage[i]);
            }
        }
        return result;
    }




}


//--------------------------------------------

let productOne = {
    name: 'Tomato',
    price: 0.90,
    quantity: 19
};
let productTwo = {
    name: 'Potato',
    price: 1.10,
    quantity: 10
};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);