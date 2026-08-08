const img = document.getElementById("swapImg");

const images = [
    "./assets/single-color-icon.png",
    "./assets/musasabi.png"
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
            index % 2 === 1 ? "-1" : "1"
        );

        img.classList.add("rotate-end");
        img.classList.remove("rotate");

        setTimeout(() => {
            img.style.transition = "none";
            img.classList.remove("rotate-end");

            void img.offsetWidth;

            img.style.transition = "";

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

