
let totSlides = document.querySelectorAll('.slider-item').length;
let passSlide = 0

document.querySelector('.slider-button').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function previous() {
    passSlide --;
    if(passSlide < 0) {
        passSlide = totSlides -1
    }
    upDateMargin()
}
function next() {
    passSlide ++;
    if(passSlide > (totSlides - 1)) {
        passSlide = 0
    }
    upDateMargin()
}

function upDateMargin() {
    let newSlide = (passSlide * document.body.clientWidth)
    document.querySelector('.sliders').style.marginLeft = `-${newSlide}px`;
}