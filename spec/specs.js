describe('Pizza', function() {
    it("initiates a new pizza", function() {
        var testPizza = new Pizza("M");
        expect(testPizza.size).to.equal("M");
        expect(testPizza.toppings).to.eql([]);
    });
});

// object types:
// pizza (size, toppings array)
// topping (name)
// order (pizza array)
// user (name, order)
//
// prototype functions:
// pizza.prototype.cost => calculate cost
