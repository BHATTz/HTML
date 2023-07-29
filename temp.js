function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
var colorChanger = document.getElementsByTagName("button")[0];
colorChanger.addEventListener("click", function () {
  document.querySelector("p").style.color = "red";
});
