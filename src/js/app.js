/**
 * If the window is scrolled down 50px, add the class 'scroll-header' to the header element, otherwise
 * remove it.
 */
// function scrollHeader() {
//     const header = document.querySelector('#header');
//     if (this.scrollY >= 50) {
//         header.classList.add('scroll-header');
//     } else {
//         header.classList.remove('scroll-header');
//     }
// }
// window.addEventListener('scroll', scrollHeader);


const image = document.querySelectorAll('.propiedad__image');
window.addEventListener('scroll', () => {

    const scroll = this.scrollY / -20;
    image.forEach(img => {
        img.style.backgroundPositionY = `${scroll}px`;
    })
})