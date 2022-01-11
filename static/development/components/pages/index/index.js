import './index.scss'

if (document.documentElement.clientWidth < 1400) {
    document.querySelector('.top_img').append(document.querySelector('.block__text_2')) 
}

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 1400) {
        document.querySelector('.top_img').append(document.querySelector('.block__text_2')) 
    }
    else {
        document.querySelector('.top_img__block_2').append(document.querySelector('.block__text_2')) 
    }
})