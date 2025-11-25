// COUNTDOWN
let count = 60;
let box = document.getElementById("countdown");

function countdown() {
    if (count >= 0) {
        box.innerHTML = count;
        count--;
    }
}
setInterval(countdown, 1000);


// LOGO POP FIX
window.onload = function () {
    const logo = document.querySelector(".logo");

    // Add animation class AFTER image loads
    setTimeout(() => {
        logo.classList.add("popIn");
    }, 200); // small delay = perfect timing
};
