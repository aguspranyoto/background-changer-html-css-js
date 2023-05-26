const body = document.querySelector(".body");
const btnBlue = document.querySelector(".blue");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnYellow = document.querySelector(".yellow");

btnBlue.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
});
btnRed.addEventListener("click", () => {
    body.style.backgroundColor = "red";
});
btnGreen.addEventListener("click", () => {
    body.style.backgroundColor = "green";
});
btnYellow.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
});
