// Countdown 60 seconds
let count = 60;
let box = document.getElementById("countdown");

function countdown() {
    if (count >= 0) {
        box.innerHTML = count;
        count--;
    }
}
setInterval(countdown, 1000);

// Logo pop animation
window.onload = function () {
    const logo = document.querySelector(".logo");
    setTimeout(() => {
        logo.classList.add("popIn");
    }, 200);
};
