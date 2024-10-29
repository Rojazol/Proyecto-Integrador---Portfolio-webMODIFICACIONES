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
// Traducciones completas para cada idioma
const translations = {
  es: {
    inicio: "INICIO",
    sobremi: "SOBRE MI",
    skills: "SKILLS",
    curriculum: "EXPERIENCIA",
    cursos: "CURSOS",
    contacto: "CONTACTO",
    name: "Rocío Jazmín Olabiaga",
    profession: "Profesora",
  },
  en: {
    inicio: "HOME",
    sobremi: "ABOUT ME",
    skills: "SKILLS",
    curriculum: "EXPERIENCE",
    cursos: "COURSES",
    contacto: "CONTACT",
    name: "Rocío Jazmín Olabiaga",
    profession: "Teacher",
  }
};

let currentLanguage = "es"; // Idioma actual

function updateLanguage() {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerText = translations[currentLanguage][key];
  });
}

// Función para alternar el idioma
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"; // Alternar idioma
  updateLanguage(); // Actualizar el idioma de los elementos

  // Actualiza el texto del botón de idioma
  document.getElementById("toggleLanguage").innerText =
    currentLanguage === "es" ? "English" : "Español";
}

// Ejecuta traducción al hacer clic en el botón
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggleLanguage").addEventListener("click", toggleLanguage);
}); 


