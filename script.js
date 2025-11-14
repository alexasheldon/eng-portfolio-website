// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// You can also add your dark mode toggle here later

// // Dark Mode Toggle
// const toggleBtn = document.getElementById("theme-toggle");
// const body = document.body;

// // Check if user has a saved preference
// if (localStorage.getItem("theme")) {
//   body.setAttribute("data-theme", localStorage.getItem("theme"));
// }

// toggleBtn.addEventListener("click", () => {

//   let currentTheme = body.getAttribute("data-theme");
//   console.log("Current Theme:", currentTheme);

//   if (currentTheme === "dark") {
//     body.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//     console.log("Switched to Light Mode");
//   } else {
//     body.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//     console.log("Switched to Light Mode");
//   }
// });
// if (!localStorage.getItem("theme")) {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     body.setAttribute("data-theme", "dark");
//   }
// }
