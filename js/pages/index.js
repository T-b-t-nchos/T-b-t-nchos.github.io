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

const animationDuration = 200;

let index = 0;
let rotation = 0;
let isAnimating = false;

img.addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;

    rotation += 90;

    img.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );

    setTimeout(() => {
        index = (index + 1) % images.length;

        img.src = images[index];

        rotation += 90;

        img.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        setTimeout(() => {
            isAnimating = false;
        }, animationDuration);
    }, animationDuration);
});


const birthYear = 2011;
const birthMonth = 12;

const today = new Date();

let age = today.getFullYear() - birthYear;

if (today.getMonth() + 1 < birthMonth) {
    age--;
}

document.getElementById("age").textContent = age;

