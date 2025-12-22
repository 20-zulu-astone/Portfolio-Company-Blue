window.addEventListener("scroll", function() {
  const header = document.querySelector(".center-header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});