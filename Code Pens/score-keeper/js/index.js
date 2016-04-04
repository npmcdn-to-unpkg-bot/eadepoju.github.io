// 1. Create click handlers for each button (#zero, #add5, #add10, #sub1)

// 2. Write functions for each click handler

// 3. Each function will need to: 
// A) Use the .innerHTML property to get the value inside of #result (store as a variable)
// B) Manipulate the value using the parseInt() method
// C) Perform the correct arithmetic
// D) Use the .innerHTML property to write the new value to #result

document.getElementById('zero').onclick = zero;
document.getElementById('add5').onclick = add5;
document.getElementById('add10').onclick = add10; 
document.getElementById('sub1').onclick = sub1; 

function zero() {
  document.getElementById('result').innerHTML = 0;
}
function add5() {
 
  var num = document.getElementById('result').innerHTML
  num = parseInt(num)
  num = num + 5
  document.getElementById('result').innerHTML = num
  
}

function add10() {
  
  var num = document.getElementById('result').innerHTML
  num = parseInt(num)
  num = num + 10
  document.getElementById('result').innerHTML = num
  }

function sub1() {
  
  var num = document.getElementById('result').innerHTML
  num = parseInt(num)
  num = num - 1
  document.getElementById('result').innerHTML = num
  }