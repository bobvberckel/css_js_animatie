// EventListener toevoegen aan de knop om er voor te zorgen dat de animatie kan starten.
// Adding an EventListener to start the animation when the button is started.
document.querySelector(".animeer-knop").addEventListener("click", (e) => {
    // Als de class al in het element te vinden is, zou hij deze weghalen. Als dat niet zo is voegt hij deze toe.
    // If the class is already in the element, it will remove it. If it doesn't exist in the element. It will add it.
    document.querySelector(".vlakje").classList.toggle("vlakje__naar-rechts");
});