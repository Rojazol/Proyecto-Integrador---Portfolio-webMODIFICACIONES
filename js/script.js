// 1. Menú Responsivo
let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// 2. Animación de Habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        const imagenes = [
            'ruta/a/imagen-html.png',
            'ruta/a/imagen-css.png',
            'ruta/a/imagen-csharp.png',
            'ruta/a/imagen-sql.png',
            'ruta/a/imagen-marketing.png',
            'ruta/a/imagen-contabilidad.png',
            'ruta/a/imagen-ensenanza.png',
            'ruta/a/imagen-programacion.png'
        ];
        
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].innerHTML = `<img src="${imagenes[i]}" alt="Habilidad ${i + 1}">`;
        }
    }
}

// Detectar scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// 3. Animación de Cursos
document.addEventListener('DOMContentLoaded', function () {
    const cursos = document.querySelectorAll('.curso');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, { threshold: 0.1 });

    cursos.forEach(curso => observer.observe(curso));
});

// 4. Traducción de Idioma
function toggleLanguage() {
    const button = document.getElementById("language-toggle");
    const language = button.dataset.language === "es" ? "en" : "es";

    const elementsToTranslate = {
        "INICIO": { "es": "INICIO", "en": "HOME" },
        "SOBRE MI": { "es": "SOBRE MI", "en": "ABOUT ME" },
        "SKILLS": { "es": "SKILLS", "en": "SKILLS" },
        "EXPERIENCIA": { "es": "EXPERIENCIA", "en": "EXPERIENCE" },
        "CURSOS": { "es": "CURSOS", "en": "COURSES" },
        "CONTACTO": { "es": "CONTACTO", "en": "CONTACT" },
        "Hola, me llamo Rocio Jazmin Olabiaga.": {
            "es": "Hola, me llamo Rocio Jazmin Olabiaga.",
            "en": "Hello, my name is Rocio Jazmin Olabiaga."
        },
        "Profesora": { "es": "Profesora", "en": "Teacher" },
        // Agrega aquí más textos según sea necesario
    };

    // Cambia el texto de cada elemento
    document.querySelectorAll("a, h1, h2, p, button").forEach(element => {
        const textContent = element.textContent.trim();
        if (elementsToTranslate[textContent]) {
            element.textContent = elementsToTranslate[textContent][language];
        }
    });

    // Cambia el texto del botón de traducción
    button.textContent = language === "es" ? "Español" : "English";
    button.dataset.language = language; // Guarda el nuevo idioma en el botón
}

