const navhidden = document.getElementById("navhidden");
var h = parseInt(window.innerWidth);
console.log(h);
const togglenavbar = () => {
  console.log("hello");
  if (navhidden.style.display == "flex") {
    navhidden.style.display = "none";
    // navhidden.style.flexDirection = "row";
  } else {
    navhidden.style.display = "flex";
    navhidden.style.flexDirection = "column";
  }
};
