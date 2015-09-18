function Constructor(thing){
  this.thing = thing;
  this.otherThing = [];
};

Thing.prototype.doThing = function() {
  // do stuff
};

  $(document).ready(function() {
    var thing = new Thing;

    $("#elementid").click(function(event) {
      $(this).text(text to change to);
      thing.runSomeFunction();
    });
  });
