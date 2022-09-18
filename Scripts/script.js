



const MENU = document.querySelector("aside");

const MODAL = document.getElementById("modal");





function showMenu(){

    MENU.style.width === '10rem' ?  MENU.style.width = 0 : MENU.style.width = '10rem';

    MODAL.style.width === '100vw' ?  MODAL.style.width = 0 : MODAL.style.width = '100vw';

    
    
}