
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".panel, .card");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;
    if (pos < alturaPantalla - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".panel, .card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.5s ease-out";
});

const form = document.getElementById("formContacto");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = form.querySelector("input[type='text']").value;
    const correo = form.querySelector("input[type='email']").value;
    const mensaje = form.querySelector("textarea").value;

    console.log("Datos enviados:", { nombre, correo, mensaje });
    alert("Gracias por contactar con nosotros, " + nombre + ". Tu mensaje ha sido enviado correctamente.");
    form.reset();
  });
}

const btnCotizar = document.querySelector(".btn");
if (btnCotizar) {
  btnCotizar.addEventListener("mouseenter", () => {
    btnCotizar.style.boxShadow = "0 0 15px rgba(255,204,0,0.7)";
  });
  btnCotizar.addEventListener("mouseleave", () => {
    btnCotizar.style.boxShadow = "none";
  });
}

const logoContainer = document.querySelector(".logo-container");
if (logoContainer) {
  logoContainer.addEventListener("mouseenter", () => {
    logoContainer.style.filter = "brightness(1.2)";
  });
  logoContainer.addEventListener("mouseleave", () => {
    logoContainer.style.filter = "brightness(1)";
  });
}

document.addEventListener("DOMContentLoaded", () => {

    const heroSlides = document.querySelectorAll(".hero-slider .slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (heroSlides.length === 0) {
        console.log("No se encontraron slides");
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {

        heroSlides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        heroSlides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= heroSlides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = heroSlides.length - 1;
        }

        showSlide(currentSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", prevSlide);
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;
            showSlide(currentSlide);

        });
    });

    showSlide(0);

    setInterval(() => {
        nextSlide();
    }, 6000);

});
