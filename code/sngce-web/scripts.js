const greeting = document.getElementById("greeting")

const hourOfDay = new Date().getHours()

if (hourOfDay > 6 && hourOfDay < 12) {
    greeting.textContent = "Good Morning!"
} else if (hourOfDay > 12 && hourOfDay < 18) {
    greeting.textContent = "Good Afternoon!"
} else {
    greeting.textContent = "Good Evening!"
}
