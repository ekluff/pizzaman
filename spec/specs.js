describe('Pizza', function() {
    it("initiates a new pizza", function() {
        var testPizza = new Pizza("M");
        expect(typeof testPizza).to.equal("object");
    });

    it("has cheese by default", function() {
        var testPizza = new Pizza("M");
        expect(testPizza.size).to.equal("M");
        expect(testPizza.toppings[0].name).to.eql("cheese");
    });

    // it("takes size and toppings", function() {
    //   var pepperoni = new Topping ("pepperoni", 4);
    //   var size = new Size("M");
    //   var pizza = new Pizza ()
    // });
});

describe('Size', function() {
    it("initiates a new size", function() {
        var medium = new Size("M");
        expect(medium.name).to.equal("M");
        expect(medium.basePrice).to.equal(16);
        expect(medium.toppingsMultiplier).to.eql(1.3);
    });
});

describe('Topping', function() {
    it("initiates a new topping", function() {
        var pepperoni = new Topping("pepperoni", 4);
        expect(pepperoni.name).to.equal("pepperoni");
        expect(pepperoni.basePrice).to.equal(4);
    });
});
//
// describe('Order', function() {
//     it("initiates a new order", function() {
//         var topping = new Topping ("pepperoni", 4);
//         var size = new Size("M");
//         var pizza = new Pizza ()
//
//         var order = new Order();
//         var pepperoni = new Topping("pepperoni", 4);
//         expect(pepperoni.name).to.equal("pepperoni");
//         expect(pepperoni.basePrice).to.equal(4);
//     });
// });









// object types:
// pizza (size, toppings array)
// topping (name, cost)
// size (base cost, toppings multiplier)
// order (pizza array)
// user (name, order)
//
// prototype functions:
// pizza.prototype.cost => calculate cost

// pizza has size and toppings. cost function multiplies topping prices by Size.toppingsMultiplier and adds to Size.basePrice,
