// 1. Use document.getElementById to store the <div> in a variable

// 2. Create a function, 'big', that increases the <div>'s height and width to 500px

// 3. Create a function, 'small', that decreases the <div>'s height and width to 250px

// 4. Use the .onmouseover function to call/invoke the function big when a user's mouse enters the <div>

// 5. Use the .onmouseout function to call/invoke the function smal when a user's mouses leaves the <div>
var box = document.getElementById('box')

function big () {
  box.style.height = "600px";
  box.style.width = "600px";
}

function small () {
  box.style.height = "250px";
  box.style.width = "250px";
}

box.onmouseover = big;
box.onmouseout = small;