import './index.scss'

let swiper = new Swiper(".plans", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        // 992: {
        //     slidesPerView: 2,
        // },
        600: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
})