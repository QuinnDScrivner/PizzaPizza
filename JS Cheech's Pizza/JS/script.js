//Yoink the location this is happening
var pizza = document.getElementById("PizzaType");
//My array for my pizza types
var pizzaTipe = ["Pepperoni", "Sausage", "Cheese", "Hawaiian", "Vegan"];
//For loop to set each Pizza Type to its own position
for (var i = 0; i < pizzaTipe.length; i++) {
  //This puts all the values from the array with their positions into one varaible
  var pType = pizzaTipe[i];
  //foundation for the next step, going to creat an HTML thingy
  var createElement = document.createElement("option");
  createElement.id = pType;
  //What to put as the text part of an option tag in HTML
  createElement.text = pType;
  //What to put as the value part of an option tag in HTML
  createElement.value = pType;
  //take my child, createElement, and smack at the targeted location on line 25
  pizza.appendChild(createElement);
  //this is now set up to where I can add and add onto the array and it will automatically update the pizzaType option
}
