window.addEventListener("scroll", function() {
  const header = document.querySelector(".center-header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});


//click to expand search bar
 const searchToggle = document.getElementById("search-toggle");
const navSearch = document.getElementById("nav-search");
const searchInput = document.getElementById("search-input");

searchToggle.addEventListener("click", () => {
  navSearch.classList.toggle("expanded");
  if (navSearch.classList.contains("expanded")) {
    searchInput.focus();
  }
});