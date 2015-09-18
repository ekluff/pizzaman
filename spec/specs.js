describe('Pizza', function() {
    it("initiates a new pizza", function() {
        var testPizza = new Pizza("M");
        expect(testPizza.size).to.equal("M");
        expect(testPizza.toppings).to.eql([]);
    });
});

describe('Size', function() {
    it("initiates initiates a new size", function() {
        var medium = new Size("M");
        expect(medium.name).to.equal("M")
        expect(medium.basePrice).to.equal(16);
        expect(medium.toppingsMultiplier).to.eql(1.3);
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

pizza has size and toppings. cost function
