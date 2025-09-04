const greeting = document.getElementById("greeting")

const hourOfDay = new Date().getHours()

if (hourOfDay > 6 && hourOfDay < 12) {
    greeting.textContent = "Good Morning!"
} else if (hourOfDay > 12 && hourOfDay < 18) {
    greeting.textContent = "Good Afternoon!"
} else {
    greeting.textContent = "Good Evening!"
}

const btn = document.getElementById("theme-toggle")
let isLightMode = true;

btn.addEventListener("click", () => {
    if (isLightMode) {
        isLightMode = false;
        btn.textContent = "☀";
    } else {
        isLightMode = true;
        btn.textContent = "🌙";
    }
    document.body.classList.toggle("dark-mode");
})

const tagline = document.getElementById("tagline");

const text = "Web Developer";

tagline.textContent = "";

let i = 0;

function typewriter() {
    if (i <= text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typewriter, 100);
    }
}

typewriter();