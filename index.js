// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});
console.log("Before DOMContentLoaded fires");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");
});
