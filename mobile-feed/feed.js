const scroll_1 = document.querySelector('.scroll-1')
const scroll_2 = document.querySelector('.scroll-2')

const scrollUpdate = () => {
    const posit_1 = scroll_1.scrollLeft
    const total_1 = scroll_1.scrollWidth - (window.innerWidth * 1.4)
    const value_1 = Math.floor(2 * posit_1 / total_1)
    console.log(value_1)
    scroll_1.setAttribute('index', value_1 < 0 ? 0 : value_1 > 2 ? 2 : value_1)
    const posit_2 = scroll_2.scrollLeft
    const total_2 = scroll_2.scrollWidth - (window.innerWidth * 1.4)
    const value_2 = Math.floor(2 * posit_2 / total_2)
    scroll_2.setAttribute('index', value_2 < 0 ? 0 : value_2 > 2 ? 2 : value_2)
    requestAnimationFrame(scrollUpdate)
}

window.addEventListener('load', scrollUpdate)
