const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('nav-menu');

if(menu && NavMenu){
    menu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
        NavMenu.classList.toggle('ativo');
    })

}



