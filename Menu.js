const menuItems = document.querySelector(".menuItems");
const CloseMenu = document.querySelector(".CloseMenu");
const hamburguesa = document.querySelector(".hamburguesa");

hamburguesa.addEventListener("click", show);
CloseMenu.addEventListener("click", close);

function show() {
    menuItems.style.display = "flex";
    menuItems.style.top = "150px";
}

function close() {
    menuItems.style.top = "-100%";
}