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