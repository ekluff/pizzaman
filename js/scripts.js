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

Pizza.prototype.price = function() {
  var basePrice = this.size.basePrice;
  var toppingsMultiplier = this.size.toppingsMultiplier;
  var toppingsBasePrice = 0;

  this.toppings.forEach(function(topping) {
    toppingsBasePrice += topping.basePrice;
  });

  var price = basePrice + (toppingsBasePrice * toppingsMultiplier);
  return price;
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
};

Order.prototype.order = function(pizza) {
  this.pizzas.push(pizza);
};

Order.prototype.price = function() {
  var price = 0;

  this.pizzas.forEach(function(pizza) {
    price += pizza.price();
  });

  return price;
};

$(document).ready(function() {
  $('#priceSentence').hide();

  $('form#orderForm').submit(function(event){
    event.preventDefault();
    var name = $('input#name').val();
    var size = $('input#size').val();

    var order = new Order(name);
    var pizza = new Pizza(size);

    for (i = 0; i<$('.toppings').length; i++) {
      var val = $('.toppings')[i].val();
      var topping = new Topping(val);
      pizza.toppings.push(topping);
    };

    order.pizzas.push(pizza);

    var orderPrice = order.price();

    $('#orderPrice').text(orderPrice);
    $('#priceSentence').show();

  });

    $(this).text(text to change to);
    thing.runSomeFunction();
  });
});
