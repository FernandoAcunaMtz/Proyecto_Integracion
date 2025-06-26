 document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const imagen = document.getElementById("imagen-animada");

    // Animación de imagen si existe
    if (imagen) {
      imagen.classList.add("animated-img");
      imagen.addEventListener("mouseenter", () => {
        imagen.style.transform = "scale(1.05)";
      });
      imagen.addEventListener("mouseleave", () => {
        imagen.style.transform = "scale(1)";
      });
    }

    // Función de scroll para navbar
    function handleNavbarScroll() {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const opacity = Math.min(scrollTop / maxScroll, 1);

      // Fondo dinámico con opacidad
      navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;

      // Sombra
      if (scrollTop > 10) {
        navbar.classList.add("with-shadow");
      } else {
        navbar.classList.remove("with-shadow");
      }

      // Texto oscuro si opacidad alta
      if (opacity > 0.5) {
        navbar.classList.add("text-dark");
        navbar.classList.remove("navbar-custom");
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("text-dark");
        navbar.classList.remove("navbar-scrolled");
        navbar.classList.add("navbar-custom");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll(); // Ejecutar al cargar
  });