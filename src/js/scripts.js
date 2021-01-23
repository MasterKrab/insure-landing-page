const menu = document.getElementById("menu")
const iconMenu = document.getElementById("icon-menu")

iconMenu.addEventListener("click", () =>{
   menu.classList.toggle("menu--active")
})