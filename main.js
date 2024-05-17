const weetje = document.getElementById("weetje");
const newWeetje = document.getElementById('new-weetje')

newWeetje.addEventListener('click', async (e) => {
    try {
        const resultaat = await fetch('https://catfact.ninja/fact')
        resultaat.json()
        .catch(error => {
            weetje.innerText = `Er heeft zich een probleem opgetreden! ${error}`  
        })
        .then(json => {
            weetje.innerText = json.fact
        })
    } catch (error) {
        weetje.innerText = `Er heeft zich een probleem opgetreden! ${error}`
    }
})

const foto = document.getElementById('foto')
const form = document.getElementById('form')
const tags = document.getElementById('tags')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputTags = tags.value;
    tags.value = "" 

    const alleTags = inputTags.split(',')
    for (const tag of alleTags) {
        if (!(/^[a-zA-Z]/.test(tag))) {
            alert("foutieve tag")
            return
         }
    }

    const afbeeldig = document.createElement('img')
    afbeeldig.src = "https://cataas.com/cat/" + inputTags
    afbeeldig.style.display = 'block';
    
    foto.appendChild(afbeeldig)

})