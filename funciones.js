
const darkMode = document.querySelector('.darkMode');
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll("[data-section]");
const menuHamburguesa = document.querySelector('.menu-hamburguesa');


darkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})


menuHamburguesa.addEventListener('click', function() {
    const navegaciones = document.querySelector('.navegaciones');

    if(navegaciones.classList.contains('mostrar')) {
        navegaciones.classList.remove('mostrar')
    } else {
        navegaciones.classList.add('mostrar')
    }
});


const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }

}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});