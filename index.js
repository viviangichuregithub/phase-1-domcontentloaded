// Your code goes here
// Fires immediately when index.js loads
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("The DOM has loaded");

  // Select the paragraph with id="text" and change its content
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});
