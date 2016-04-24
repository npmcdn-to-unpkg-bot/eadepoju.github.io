// Write a function that accepts ONE argument - the meal cost - and outputs the following:
// A) Tax (assume 8.25%) to #tax
// B) Tip (assume 20%) to #tip
// C) The new total (meal cost + tax + tip) to #total

$('#submit').click(function () {
  
  // 1. Define a variable, cost, set to the value of #cost
  var cost = $('#cost').val();
  cost = parseFloat(cost);
  
  // 2. Pass this variable into a SEPARATE function that performs the above instructions
  calculate(cost)
})

// 3. DEFINE YOUR SEPARATE FUNCTION HERE:
function calculate (cost) {
  // logic here
  var tax = cost * 0.0825;
  var tip = cost * 0.2;
  var totalCost = cost + tip + tax;
  // output 
  $('#tax').text(tax);
  $('#tip').text(tip);
  $('#total').text(totalCost);
}