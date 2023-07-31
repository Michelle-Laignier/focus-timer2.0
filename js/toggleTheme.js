const buttonMoon = document.querySelector(".moon")
const buttonSun = document.querySelector(".sun")
const page = document.querySelector("html")

buttonMoon.addEventListener("click", toggleDarkAndLight)
buttonSun.addEventListener("click", toggleDarkAndLight)

function toggleDarkAndLight () {
    page.classList.toggle("light")
}