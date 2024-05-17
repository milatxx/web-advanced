
// Gebruiker doet website voor het eerst open
window.localStorage.setItem('theme', 'os-default')

// Gebruiker verandert hun theme
window.localStorage.setItem("theme", "dark")

// Gebruiker komt terug na twee dagen, we kijken welk thema ze willen
window.localStorage.getItem('theme')

// Andere functie?
window.localStorage.clear()