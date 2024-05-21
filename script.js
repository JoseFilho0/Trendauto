window.onload = function () {
    document.querySelector('.menu-opener').addEventListener("click", function() {
        let navLinks = document.querySelectorAll("header nav li a");
        navLinks.forEach(function(navLink) {
            if (navLink.style.display == 'flex') {
                navLink.style.display = 'none';
            } else {
                navLink.style.display = 'flex';
            }
        });
    });
}




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




let change = document.getElementById("close-img");

let changeImg = document.getElementById("img01");
let images = document.getElementsByClassName("clickable");


for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        change.style.display = "block";
        changeImg.src = this.src;
    }
}


let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    change.style.display = "none"
}



let hide = document.querySelector("main");
let lateralDiv = document.querySelector(".lateral")

hide.addEventListener("click", () => {
    lateralDiv.style.display = "none";
});

