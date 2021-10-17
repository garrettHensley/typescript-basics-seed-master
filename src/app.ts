const pizzas = [
    { name: 'Pepporoni', toppings: ['pepporoni'] },
]

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase())

console.log(mappedPizzas)

const pizza = {
    name: "Blazing Inferno",
    getName: function () { console.log(this.name) }
}


console.log(pizza.getName())
pizza.getName()