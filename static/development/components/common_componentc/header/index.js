import './index.scss'

window.onload = function() {
    let menu_btn = document.querySelector('.header_hamburger');
    menu_btn.addEventListener("click", menu_action);

    function menu_action() {
        let header_navigation = document.querySelector('.header');
        header_navigation.classList.toggle('active');
        document.querySelector('.header_main').classList.toggle('active')
    }
}

if (document.documentElement.clientWidth < 992) {
    document.querySelector('.header_mob').append(document.querySelector('.header_logo')) 
}

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 992) {
        document.querySelector('.header_mob').append(document.querySelector('.header_logo')) 
    }
    else {
        document.querySelector('.after_logo').after(document.querySelector('.header_logo')) 
    }
})