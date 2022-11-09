const navItems = document.getElementById("nav__items");
const open_menu = document.getElementById("open_nav-btn");
const close_menu = document.getElementById("close_nav-btn");

open_menu.addEventListener("click", function () {
  navItems.style.display = "flex";
  open_menu.style.display = "none";
  close_menu.style.display = "inline-block";
});

close_menu.addEventListener("click", function () {
  navItems.style.display = "none";
  open_menu.style.display = "inline-block";
  close_menu.style.display = "none";
});
