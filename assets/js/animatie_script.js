// Na enige tijd start de animatie van zelf.
// After an amount of time, the animation will start itself.
setTimeout(() => {
    document.querySelector(".vlakje").classList.toggle("vlakje__naar-rechts");
}, 3000);

// Een functie maken om het menu te kunnen starten.
// Making a function to start the menu.
const nav__knop = document.querySelector(".nav__knop");
const nav__link = document.querySelectorAll(".nav__link");

nav__knop.addEventListener("click", () => {
    nav__link.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle("nav__link--schuif-in");
        }, 100 * index);
    });
    document.querySelector(".fa-bars").classList.toggle("verbergen");
    document.querySelector(".fa-times").classList.toggle("verbergen");
});

// EventListener toevoegen aan de knop om er voor te zorgen dat de animatie kan starten.
// Adding an EventListener to start the animation when the button is started.
document.querySelector(".animeer-knop").addEventListener("click", (e) => {
    // Als de class al in het element te vinden is, zou hij deze weghalen. Als dat niet zo is voegt hij deze toe.
    // If the class is already in the element, it will remove it. If it doesn't exist in the element. It will add it.
    document.querySelector(".vlakje").classList.toggle("vlakje__naar-rechts");
});
