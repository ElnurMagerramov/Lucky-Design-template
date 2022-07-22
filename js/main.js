for (const category of document.querySelectorAll(".category")) {
    for (const category_ul of document.querySelectorAll(".category>ul")) {
        category.addEventListener("mouseover", () => {
            category_ul.classList.remove("d-none");
        });
        category.addEventListener("mouseout", () => {
            category_ul.classList.add("d-none");
        });
    }
}
document.querySelector(".dropdown").addEventListener("mouseover", () => {
    document.querySelector(".conditions").classList.add("transform-90deg");
    document.querySelector(".dropdown>ul").classList.remove("d-none");
});
document.querySelector(".dropdown").addEventListener("mouseout", () => {
    document.querySelector(".conditions").classList.remove("transform-90deg");
    document.querySelector(".dropdown>ul").classList.add("d-none");
});

for (const addToCart of document.querySelectorAll(".addToCart")) {
    addToCart.addEventListener("click", () => {
        for (const addValue of document.querySelectorAll(".addValue")) {
            addValue.innerText = parseInt(addValue.textContent) + 1;
        }
    });
}
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        document.querySelector(".position-fixed").classList.remove("d-none");
    } else {
        document.querySelector(".position-fixed").classList.add("d-none");
    }
});

for (const likes of document.querySelectorAll(".likes")) {
    for (const heart_outline of document.querySelectorAll(".heart-outline")) {
        heart_outline.addEventListener("click", () => {
            heart_outline.classList.add("d-none");
            heart_outline.nextElementSibling.classList.remove("d-none");
            likes.innerText = parseInt(likes.textContent) + 1;
        });
    }
    for (const heart_filled of document.querySelectorAll(".heart-filled")) {
        heart_filled.addEventListener("click", () => {
            heart_filled.classList.add("d-none");
            heart_filled.previousElementSibling.classList.remove("d-none");
            likes.innerText = parseInt(likes.textContent) - 1;
        });
    }
}
var swiper1 = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
