const navhidden = document.getElementById("navhidden");
var h = parseInt(window.innerWidth);
console.log(h);
const togglenavbar = () => {
  console.log("hello");
  if (navhidden.style.display == "flex") {
    navhidden.style.display = "none";
  } else {
    navhidden.style.display = "flex";
    navhidden.style.flexDirection = "column";
    navhidden.style.alignItems = "center";
    navhidden.style.width = "100%";
  }
};
