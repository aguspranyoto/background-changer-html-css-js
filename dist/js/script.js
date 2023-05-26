const body = document.querySelector(".body");
const btnPink = document.querySelector(".pink");
const btnCadetBlue = document.querySelector(".cadetblue");
const btnWheat = document.querySelector(".wheat");
const btnCornFlowerBlue = document.querySelector(".cornflowerblue");

btnPink.addEventListener("click", () => {
    body.style.backgroundColor = "pink";
});
btnCadetBlue.addEventListener("click", () => {
    body.style.backgroundColor = "cadetblue";
});
btnWheat.addEventListener("click", () => {
    body.style.backgroundColor = "wheat";
});
btnCornFlowerBlue.addEventListener("click", () => {
    body.style.backgroundColor = "cornflowerblue";
});
