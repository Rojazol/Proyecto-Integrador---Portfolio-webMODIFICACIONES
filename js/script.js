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

// Variable para rastrear el idioma actual (español por defecto)
let isSpanish = true;

// Función para alternar entre español e inglés
function toggleLanguage() {
    isSpanish = !isSpanish;

    document.getElementById("inicio").innerHTML = isSpanish 
        ? `<h2>Inicio</h2><p>Bienvenido a mi portafolio profesional.</p>` 
        : `<h2>Home</h2><p>Welcome to my professional portfolio.</p>`;

    document.getElementById("sobremi").innerHTML = isSpanish 
        ? `<h2>Sobre Mí</h2><p>Soy un profesional dedicado al desarrollo web y otras áreas técnicas.</p>` 
        : `<h2>About Me</h2><p>I am a professional dedicated to web development and other technical areas.</p>`;

    document.getElementById("skills").innerHTML = isSpanish 
        ? `<h2>Skills</h2><p>Aquí se encuentran mis habilidades técnicas.</p>` 
        : `<h2>Skills</h2><p>Here are my technical skills.</p>`;

    document.getElementById("curriculum").innerHTML = isSpanish 
        ? `<h2>Experiencia</h2><p>He trabajado en varios proyectos de desarrollo web.</p>` 
        : `<h2>Experience</h2><p>I have worked on several web development projects.</p>`;

    document.getElementById("cursos").innerHTML = isSpanish 
        ? `<h2>Cursos</h2><p>He completado cursos en desarrollo web y tecnologías emergentes.</p>` 
        : `<h2>Courses</h2><p>I have completed courses in web development and emerging technologies.</p>`;

    document.getElementById("contacto").innerHTML = isSpanish 
        ? `<h2>Contacto</h2><p>Para contactarme, utiliza el formulario a continuación.</p>` 
        : `<h2>Contact</h2><p>To contact me, please use the form below.</p>`;

    // Cambiar el texto del botón según el idioma actual
    document.getElementById("language-toggle").textContent = isSpanish ? "Español" : "Inglés";
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
