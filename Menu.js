addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.querySelector('.hamburguesa');
    if(hamburguesa){
        hamburguesa.addEventListener('click', () => {
            const menuItems = document.querySelector('.menuItems');
            menuItems.classList.toggle('show');
        })
    }
})