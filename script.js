let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

// code to generate random rgb value
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;



function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`; 

    css.textContent = body.style.background + ",";
}

function onLoad() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ",";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


onLoad();

