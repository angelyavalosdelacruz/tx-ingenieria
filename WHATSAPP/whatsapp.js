document.addEventListener("DOMContentLoaded", () => {

    const boton = document.createElement("a");

    boton.href = "https://wa.me/51943369827?text=Hola,%20quisiera%20recibir%20información...";
    boton.target = "_blank";
    boton.className = "whatsapp-float";

    const rutaImagen =
        window.location.pathname.includes("/PRODUCTOS/") ||
        window.location.pathname.includes("/SERVICIOS/") ||
        window.location.pathname.includes("/CONTACTO/") ||
        window.location.pathname.includes("/CONOCENOS/") ||
        window.location.pathname.includes("/CATALOGO/") ||
        window.location.pathname.includes("/CUENTA/")
        ? "../WHATSAPP/iconWhatsApp.png"
        : "WHATSAPP/iconWhatsApp.png";

    boton.innerHTML = `<img src="${rutaImagen}" alt="WhatsApp">`;

    document.body.appendChild(boton);

});