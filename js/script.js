let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
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


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// cursos
document.addEventListener('DOMContentLoaded', function () {
    const cursos = document.querySelectorAll('.curso');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que es visible
            }
        });
    }, { threshold: 0.1 }); // El 10% del elemento debe estar en pantalla para activarse

    cursos.forEach(curso => observer.observe(curso));
});

// Variable para rastrear el idioma actual (español por defecto)
let isSpanish = true;

// Texto en español e inglés para cada sección
const content = {
    inicio: {
        es: `<h2>Inicio</h2><p>Bienvenido a mi portafolio profesional.</p>`,
        en: `<h2>Home</h2><p>Welcome to my professional portfolio.</p>`
    },
    sobremi: {
        es: `<h2>Sobre Mí</h2><p>Soy un profesional dedicado al desarrollo web y otras áreas técnicas.</p>`,
        en: `<h2>About Me</h2><p>I am a professional dedicated to web development and other technical areas.</p>`
    },
    skills: {
        es: `<h2>Skills</h2><p>Aquí se encuentran mis habilidades técnicas.</p>`,
        en: `<h2>Skills</h2><p>Here are my technical skills.</p>`
    },
    curriculum: {
        es: `<h2>Experiencia</h2><p>He trabajado en varios proyectos de desarrollo web.</p>`,
        en: `<h2>Experience</h2><p>I have worked on several web development projects.</p>`
    },
    cursos: {
        es: `<h2>Cursos</h2><p>He completado cursos en desarrollo web y tecnologías emergentes.</p>`,
        en: `<h2>Courses</h2><p>I have completed courses in web development and emerging technologies.</p>`
    },
    contacto: {
        es: `<h2>Contacto</h2><p>Para contactarme, utiliza el formulario a continuación.</p>`,
        en: `<h2>Contact</h2><p>To contact me, please use the form below.</p>`
    }
};

// Función para alternar entre español e inglés
function toggleLanguage() {
    isSpanish = !isSpanish;
    const lang = isSpanish ? 'es' : 'en';

    // Cambiar el contenido de cada sección según el idioma seleccionado
    document.getElementById("inicio").innerHTML = content.inicio[lang];
    document.getElementById("sobremi").innerHTML = content.sobremi[lang];
    document.getElementById("skills").innerHTML = content.skills[lang];
    document.getElementById("curriculum").innerHTML = content.curriculum[lang];
    document.getElementById("cursos").innerHTML = content.cursos[lang];
    document.getElementById("contacto").innerHTML = content.contacto[lang];

    // Cambiar el texto del botón de traducción
    document.getElementById("language-toggle").textContent = isSpanish ? "Español" : "Inglés";
}

