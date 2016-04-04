// 1. Use document.getElementById to store the <div> in a variable

// 2. Call the .onclick method on the variable from step one
// 3. Assign the .onclick method to an ANONYMOUS function that increases the height and width of the <div> to 600px each
// box.onclick = function () {
//   box.style.height = "600px";
//   box.style.width = "600px";
// }

// 4. Comment-out your code and rewrite the event handler using a NAMED function

var box= document.getElementById('box');

box.onclick = function () {
  box.style.height = "600px";
  box.style.width = "600px";
}

var boxone= document.getElementById('boxone');

boxone.onclick = function () {
  boxone.style.height = "600px";
  boxone.style.width = "600px";
}