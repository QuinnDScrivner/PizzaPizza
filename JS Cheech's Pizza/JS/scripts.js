printQuery();
//This line right here is an event that automatically happens when the page is loaded
window.addEventListener("load", salutations);
//in the params I told the event to happen apon the page loading and to call my function: salutations

function salutations() {
  //This line changes whatever is in the h2 tag and whatever else is in id="container" to my saluatation, hence the function name.
  document.getElementById("container").innerHTML =
    "Thank you for ordering with Cheech's Pizza, we hope to see you again!";
}

function printQuery() {
  //using the url of my current browser and using the substring from the second param I send via the form.
  var query = window.location.search.substring(1);
  query.className = "formatted";
  //query or anything for that matter that has .split with it means add a, whatever is added in the paraenthesis, to seperate what I have sent.
  var vars = query.split("&");
  //beautiful for function to determine how many = I need for my next webpage to display correctly
  for (var i = 0; i < vars.length; i++) {
    //take however many inputs from the for there is and style it with an = sign with it
    var pair = vars[i].split("=");
    //put it all together in the search bar to output correctly
    document.write(pair[0] + ": " + pair[1] + "<br />" + "<br />");
  }
  //Grabbing the last pair which is the number of pizza's
  var psuedoTotal = pair[1];
  //multiply by $9.49 to get subtotal
  var subTotal = psuedoTotal * 9.49;
  //display the subtotal
  document.write("$" + subTotal + " is the sub total");
  //Tax is tax...
  var tax = 0.076;
  document.write("<br />" + "<br />" + "Tax is 7.6%" + "<br />" + "<br />");
  //create variable that will give us the grand total
  var theTotal = (subTotal += tax * subTotal);
  theTotal = theTotal.toFixed(2);
  //Print out the total
  document.write("$" + theTotal + " is the grand total");
}
