const menuButton = document.getElementById("hamburguer-menu")
const menuContainer = document.getElementById("menu-navigation-container")

menuButton.addEventListener('click', () => {
    if(menuContainer.style.display == "none" || menuContainer.style.display == ""){
        menuContainer.style.display = "block"
    }else{
        menuContainer.style.display = "none"
    }
})