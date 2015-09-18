function Pizza(size){
  this.size = size;
  this.toppings = [];
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
