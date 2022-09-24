let navOut = document.getElementById("nav-slide-out");
let navIn = document.getElementById("nav-slide-in");
let homeNav = document.getElementById("home-nav")
let leftSection = document.getElementsByClassName("left-section")[0];


// const windowResize = () => {
//   console.log(window.innerWidth);
//   if (window.innerWidth > 850) {
//     navOut.style.display = "none"
//     navIn.style.display = "none"
//     leftSection.style.position = "relative"
//     homeNav.style.display = "flex";
//     leftSection.style.width = ""
//     console.log("sixing");
//   }
// }

navOut.addEventListener("click", () => {
  leftSection.style.width = "300px"
  setTimeout(() => {
    leftSection.style.position = "absolute"
    homeNav.style.display = "flex";
  }, 300);
  navOut.style.display = "none"
  navIn.style.display = "flex"
})

navIn.addEventListener("click", () => {
  leftSection.style.width = "0px"
  leftSection.style.position = "relative"
  setTimeout(() => {
    homeNav.style.display = "none";
  }, 200);
  navIn.style.display = "none"
  navOut.style.display = "flex"
})
