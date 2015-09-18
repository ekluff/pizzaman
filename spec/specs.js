describe('Pizza', function() {
    it("initiates a new pizza", function() {
        var testPizza = new Pizza("M");
        expect(typeof testPizza).to.equal("object");
    });

    it("has cheese by default", function() {
        var testPizza = new Pizza("M");
        expect(testPizza.toppings[0].name).to.eql("cheese");
    });

    it("starts off small by default", function(){
      var testPizza = new Pizza();
      expect(testPizza.size.name).to.equal("S");
    });

    it("takes size and toppings", function() {
      var pizza = new Pizza ("M");
      pizza.addTopping("pepperoni");

      expect(pizza.size.name).to.equal("M");
      expect(pizza.toppings[1].name).to.equal("pepperoni");
    });

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

describe('Order', function() {
    it("initiates a new order", function() {
        var order = new Order();
        expect(typeof order).to.equal("object");
    });
});









// object types:
// pizza (size, toppings array)
// topping (name, cost)
// size (base cost, toppings multiplier)
// order (pizza array)
// user (name, order)
//
// prototype functions:
// pizza.prototype.cost => calculate cost
// pizza.prototype.add Topping => push topping into pizza

// pizza has size and toppings. cost function multiplies topping prices by Size.toppingsMultiplier and adds to Size.basePrice,
