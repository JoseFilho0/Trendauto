let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let slider = document.querySelector(".slider");
let list = document.querySelector(".list");

next.onclick = function () {
    showSlider('next');
};

prev.onclick = function () {
    showSlider('prev');
};

function showSlider(type) {
    let items = document.querySelectorAll(".item");

    if (type === 'next') {
        list.appendChild(items[0]);
    } else if (type === 'prev') {
        list.insertBefore(items[items.length -1], items[0]);
    }
}


/*document.addEventListener('scroll', function() {
    let lateral = document.querySelector('.lateral');
    let footer = document.querySelector('.content-footer');

    let lateralRect = lateral.getBoundingClientRect();
    let footerRect = footer.getBoundingClientRect();

    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    let lateralTop = scrollTop + lateralRect.top;
    let footerTop = scrollTop + footerRect.top;

    if (scrollTop > lateralTop - 10) {
        if (footerRect.top <= lateralRect.height + 10) {
            lateral.classList.remove('fixed');
            lateral.classList.add('stop');
            lateral.style.top = (footerTop - lateralRect.height - 10) + 'px';
        } else {
            lateral.classList.remove('stop');
            lateral.classList.add('fixed');
            lateral.style.top = '40px';
        }
    } else {
        lateral.classList.remove('fixed');
        lateral.classList.remove('stop');
        lateral.style.top = '100vh'; // Define a posição inicial da lateral
    }
});*/


