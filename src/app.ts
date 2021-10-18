const pizza = {
    name: 'Pepporoni',
    price: 15,
    getname() {
        return this.name
    }
};

console.log(pizza.getname())

const toppings = ['pepporoni']

function createOrder(pizza: object, toppings: object) {
    return { pizza, toppings }
}

console.log(createOrder(pizza, toppings))