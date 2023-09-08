
const languageLinks = document.querySelectorAll('.dropdown-content a');
const dropdownContent = document.querySelector('.dropdown-content');


function toggleDropdown() {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}


function changeLanguage(event) {
    event.preventDefault();
    
   
    const language = this.getAttribute('data-lang');
    
  
    document.getElementById('titulo').textContent = getLanguageText(language).titulo;
    document.getElementById('mensaje').textContent = getLanguageText(language).mensaje;

    dropdownContent.style.display = 'none';
}


function getLanguageText(language) {
    const languageTexts = {
        pt: { titulo: 'Bem-vindo', mensaje: 'Selecione um idioma para continuar.' },
        en: { titulo: 'Welcome', mensaje: 'Select a language to continue.' },
        es: { titulo: 'Bienvenido', mensaje: 'Seleccione un idioma para continuar.' }
 
    };

    return languageTexts[language] || languageTexts.en;
}


document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);

languageLinks.forEach(link => {
    link.addEventListener('click', changeLanguage);
});