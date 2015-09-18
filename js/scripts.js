function Pizza(size){
  var sizeName = size === undefined ? "S" : size;
  this.size = new Size (sizeName);
  this.toppings = [];

  var cheese = new Topping("cheese", 0);
  this.toppings.push(cheese);
};

Pizza.prototype.addTopping = function(toppingName) {
  var topping = new Topping (toppingName);
  this.toppings.push(topping);
};

function Size(name){
  this.name = name;
  this.basePrice = 0;
  this.toppingsMultiplier = 1;

  if (this.name === "S") {
    this.basePrice = 14;
    this.toppingsMultiplier = 1;
  } else if (this.name === "M") {
    this.basePrice = 16;
    this.toppingsMultiplier = 1.3;
  } else if (this.name === "L") {
    this.basePrice = 20;
    this.toppingsMultiplier = 1.7;
  } else {
    console.log("Size name does not equal 'S', 'M', or 'L'. Pizza costs $1,000,000.");
    this.basePrice = 1000000;
    this.toppingsMultiplier = 600;
  };
};

function Topping(name, basePrice) {
  this.name = name;
  this.basePrice = basePrice === undefined ? 2 : basePrice; // if no price specified defaults to 2
};

function Order(name) {
  this.name = name;
  this.pizzas = [];
  this.price = 0;
};

Order.prototype.order = function(pizza) {
  this.pizzas.push(pizza);
};
//
// Thing.prototype.doThing = function() {
//   // do stuff
// };
//
// $(document).ready(function() {
//   var thing = new Thing;
//
//   $("#elementid").click(function(event) {
//     $(this).text(text to change to);
//     thing.runSomeFunction();
//   });
// });
