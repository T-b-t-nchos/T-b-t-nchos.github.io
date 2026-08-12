document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hv-ul");

    elements.forEach((el) => {
        el.classList.add("intro");

        el.addEventListener("mouseenter", () => {
            el.classList.remove("intro");
        });

        setTimeout(() => {
            el.classList.remove("intro");
        }, 2700 /*Animation delay + Animation duration*/);
    });
});


const img = document.getElementById("swapImg");

const images = [
    "/assets/single-color-icon.png",
    "/assets/musasabi.png"
];

let index = 0;
let isAnimating = false;

img.addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;

    img.classList.add("rotate");

    setTimeout(() => {
        index = (index + 1) % images.length;

        img.src = images[index];

        img.style.setProperty(
            "--flip",
            index % 2 === 0 ? "-1" : "1"
        );

        img.classList.remove("rotate");
        img.classList.add("rotate-end");

        setTimeout(() => {
            img.classList.remove("rotate-end");
            isAnimating = false;
        }, 300);
    }, 300);
});


const birthYear = 2011;
const birthMonth = 12;

const today = new Date();

let age = today.getFullYear() - birthYear;

if (today.getMonth() + 1 < birthMonth) {
    age--;
}

document.getElementById("age").textContent = age;

