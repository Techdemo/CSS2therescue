// Yank theme color from localStorage and use it.
document.documentElement.style.setProperty("--mainColor", localStorage.getItem("userThemeColor"));

let colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  document.documentElement.style.setProperty("--blue", this.value);
  localStorage.setItem("userThemeColor", this.value);
});

var slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  console.log(this.value)
  document.documentElement.style.setProperty("--eyeVar", this.value + '%');
  localStorage.setItem("eyeVar", this.value);
}