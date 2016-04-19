// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, itemOrdered) {
  var option = prompt(questionText);
   if(option.toUpperCase()== "YES"){
     order+= itemOrdered + ",";
   }

}

// call the QUESTION function with the order options
question("Do you want beans?(Yes/No)","beans ");
question("Do you want rice?(Yes/No)","rice ");
question("Do you want chicken?(Yes/No)","chicken ");
question("Do you want lettuce?(Yes/No)","lettuce ");
question("Do you want corn?(Yes/No)","corn");
question("Do you want cheese?(Yes/No)","cheese ");
question("Do you want sour cream?(Yes/No)","sour cream ");
question("Do you want guacamole?(Yes/No)","guacamole ");

order= order.substring(0,order.lastIndexOf(","));

// output their order
document.write("<p>The burrito bowl you ordered has: " + order + "<p>");
