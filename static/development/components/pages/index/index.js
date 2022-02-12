import './index.scss'

let swiper = new Swiper(".steps", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
})