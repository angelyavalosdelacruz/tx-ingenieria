// =====================================================
// DATOS DE PRODUCTOS
// =====================================================

const productos = {

    1: {
        titulo: "BIG PILOTO",
        imagenes: [
            "imagenesp/bigpilotos.png"
        ]
    },


    2: {
        titulo: "BASE DE BIG PILOTO",
        imagenes: [
            "imagenesp/basebig.png"
        ]
    },


    3: {
        titulo: "ACOPLE CODO DE 90° TIPO BAUER DE 4",
        imagenes: [
            "imagenesp/codo90.png"
        ]
    },


    4: {
        titulo: "ACOPLE CODO DE 45° TIPO BAUER DE 4",
        imagenes: [
            "imagenesp/codo45.png"
        ]
    },


    5: {
        titulo: "ACOPLE CODO DE T TIPO BAUER DE 4",
        imagenes: [
            "imagenesp/acopleT.png"
        ]
    },


    6: {
        titulo: "ACOPLE CODO Y TIPO BAUER DE 4",
        imagenes: [
            "imagenesp/acopleY.png"
        ]
    },


    7: {
        titulo: "PINES DE EXPANSION",
        imagenes: [
            "imagenesp/Pexpansion.png"
        ]
    },


    8: {
        titulo: "PICAS REVESTIDA OVERLAY",
        imagenes: [
            "imagenesp/picas.png"
        ]
    },


    9: {
        titulo: "TACOS INTERCAMBIABLES",
        imagenes: [
            "imagenesp/tacosint.png"
        ]
    },


    10: {
        titulo: "PORTA PICAS",
        imagenes: [
            "imagenesp/portapicas.png"
        ]
    },


    11: {
        titulo: "BASE DE TACOS INTERCAMBIABLES",
        imagenes: [
            "imagenesp/basetacos.png"
        ]
    },


    12: {
        titulo: "ROLET BIG",
        imagenes: [
            "imagenesp/roletbig.png"
        ]
    },


    13: {
        titulo: "CAJA KELLY BOX",
        imagenes: [
            "imagenesp/cajakelly.png"
        ]
    },


    14: {
        titulo: "SACA PICAS",
        imagenes: [
            "imagenesp/sacapicas.png"
        ]
    },


    15: {
        titulo: "ACOPLAMIENTO RAPIDO",
        imagenes: [
            "imagenesp/acoprap.png"
        ]
    },
    16: {
        titulo: "PORTA PICAS (TEETH HOLDER)",
        imagenes: [
            "imagenesp/tholder.png"
        ]
    },

     17: {
        titulo: "CABEZALES DE TUBO TREMIE",
        imagenes: [
            "imagenesp/tremie.png"
        ]
    },
    18: {
        titulo: "BROCA DE DIENTES PLANOS",
        imagenes: [
            "imagenesp/brocad.png"
        ]
    },



};


// =====================================================
// RUTAS DE CUENTA
// =====================================================

const rutasCuenta = {

    login: "../CUENTA/login.html",

    registro: "../CUENTA/registro.html"

};


let temporizador;


// =====================================================
// USUARIO LOGUEADO
// =====================================================

function usuarioLogueado(){

    return localStorage.getItem(
        "usuarioActivo"
    );

}


// =====================================================
// IR AL DETALLE DEL PRODUCTO
// =====================================================

function mostrarDetalle(

    id

){

    window.location.href =
        "detproductos.html?id=" + id;

}


// =====================================================
// CREAR TOAST DE FAVORITOS
// =====================================================

function crearToast(){

    let toast =
        document.querySelector(
            ".favorito-toast"
        );


    if(toast){

        return toast;

    }


    toast =
        document.createElement(
            "div"
        );


    toast.className =
        "favorito-toast";


    toast.innerHTML = `

        <img
            id="favorito-toast-img"
        >


        <div>

            <strong
                id="favorito-toast-titulo"
            >
            </strong>


            <p>

                Debes

                <a
                    href="${rutasCuenta.login}"
                >
                    iniciar sesión
                </a>

                o

                <a
                    href="${rutasCuenta.registro}"
                >
                    crear una cuenta
                </a>

                para guardar este producto.

            </p>

        </div>


        <button
            class="cerrar-toast"
            type="button"
        >

            ×

        </button>

    `;


    document.body.appendChild(
        toast
    );


    toast
        .querySelector(
            ".cerrar-toast"
        )
        .addEventListener(

            "click",

            function(){

                toast.classList.remove(
                    "activo"
                );

            }

        );


    return toast;

}


// =====================================================
// MOSTRAR TOAST
// =====================================================

function mostrarToast(

    producto,

    id

){

    const toast =
        crearToast();


    const imagen =
        document.getElementById(
            "favorito-toast-img"
        );


    const titulo =
        document.getElementById(
            "favorito-toast-titulo"
        );


    imagen.src =
        producto.imagenes[0];


    titulo.textContent =
        producto.titulo;


    toast.classList.add(
        "activo"
    );


    clearTimeout(
        temporizador
    );


    temporizador =
        setTimeout(

            function(){

                toast.classList.remove(
                    "activo"
                );

            },

            6000

        );

}


// =====================================================
// GUARDAR FAVORITO
// =====================================================

function guardarFavorito(

    id

){

    const producto =
        productos[id];


    if(!producto){

        return;

    }


    if(
        !usuarioLogueado()
    ){

        mostrarToast(

            producto,

            id

        );

        return;

    }


    alert(
        "Producto añadido a favoritos ❤️"
    );

}


// =====================================================
// CARGAR DETALLE DEL PRODUCTO
// =====================================================

function cargarDetalle(){

    const titulo =
        document.getElementById(
            "titulo-producto"
        );


    if(!titulo){

        return;

    }


    const parametros =
        new URLSearchParams(

            window.location.search

        );


    const id =
        Number(

            parametros.get(
                "id"
            )

        );


    const producto =
        productos[id];


    if(!producto){

        return;

    }


    // =================================================
    // TÍTULO DEL PRODUCTO
    // =================================================

    titulo.textContent =
        producto.titulo;


    // =================================================
    // DESCRIPCIÓN DEL HERO
    // =================================================

    const descripcionHero =
        document.getElementById(
            "descripcion-producto"
        );


    if(descripcionHero){

        descripcionHero.textContent =
            producto.descripcion;

    }


    // =================================================
    // IMAGEN DEL PRODUCTO
    // =================================================

    const imagen =
        document.getElementById(
            "img1"
        );


    if(imagen){

        imagen.src =
            producto.imagenes[0];


        imagen.alt =
            producto.titulo;


        activarZoom(
            imagen
        );

    }


    // =================================================
    // DESCRIPCIÓN PRINCIPAL
    // =================================================

    const descripcionSecundaria =
        document.getElementById(
            "descripcion-producto-secundaria"
        );


    if(descripcionSecundaria){

        descripcionSecundaria.textContent =
            producto.descripcion;

    }


    // =================================================
    // PRECIO
    // =================================================

    const precio =
        document.querySelector(
            ".producto-precio"
        );


    if(precio){

        precio.textContent =
            producto.precio;

    }


    // =================================================
    // BOTÓN FAVORITOS PRINCIPAL
    // =================================================

    const botonFavorito =
        document.querySelector(
            ".btn-favorito-det"
        );


    if(botonFavorito){

        botonFavorito.onclick =

            function(){

                guardarFavorito(

                    id

                );

            };

    }


    // =================================================
    // PRODUCTOS RELACIONADOS
    // =================================================

    cargarRelacionados(

        id

    );

}


// =====================================================
// ZOOM DE IMAGEN
// =====================================================

function activarZoom(

    imagen

){

    imagen.addEventListener(

        "mousemove",

        function(event){

            const rect =
                imagen.getBoundingClientRect();


            const x =

                (

                    event.clientX -

                    rect.left

                )

                /

                rect.width

                *

                100;


            const y =

                (

                    event.clientY -

                    rect.top

                )

                /

                rect.height

                *

                100;


            imagen.style.transform =
                "scale(1.8)";


            imagen.style.transformOrigin =

                x +

                "% " +

                y +

                "%";

        }

    );


    imagen.addEventListener(

        "mouseleave",

        function(){

            imagen.style.transform =
                "scale(1)";


            imagen.style.transformOrigin =
                "center";

        }

    );

}


// =====================================================
// CARGAR PRODUCTOS RELACIONADOS
// =====================================================

function cargarRelacionados(

    idActual

){

    const contenedor =
        document.getElementById(
            "productos-recomendados"
        );


    if(!contenedor){

        return;

    }


    contenedor.innerHTML =
        "";


    const ids =

        Object.keys(

            productos

        )

        .map(

            Number

        )

        .filter(

            function(id){

                return id !== idActual;

            }

        );


    const relacionados =

        ids.slice(

            0,

            4

        );


    relacionados.forEach(

        function(id){

            const producto =
                productos[id];


            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "producto-relacionado-card";


            tarjeta.innerHTML = `

                <a

                    href="detproductos.html?id=${id}"

                    class="relacionado-imagen-link"

                >

                    <img

                        src="${producto.imagenes[0]}"

                        alt="${producto.titulo}"

                    >

                </a>


                <div

                    class="relacionado-info"

                >

                    <h3>

                        <a

                            href="detproductos.html?id=${id}"

                        >

                            ${producto.titulo}

                        </a>

                    </h3>


                    <p>

                        ${producto.descripcion}

                    </p>


                    <div

                        class="relacionado-precio"

                    >

                        ${producto.precio}

                    </div>


                    <button

                        class="btn-favorito-relacionado"

                        type="button"

                    >

                        ♡ Añadir a favoritos

                    </button>

                </div>

            `;


            const botonFavorito =

                tarjeta.querySelector(

                    ".btn-favorito-relacionado"

                );


            botonFavorito.addEventListener(

                "click",

                function(event){

                    event.preventDefault();


                    event.stopPropagation();


                    guardarFavorito(

                        id

                    );

                }

            );


            contenedor.appendChild(

                tarjeta

            );

        }

    );

}


// =====================================================
// INICIAR TODO
// =====================================================

document.addEventListener(

    "DOMContentLoaded",

    function(){

        cargarDetalle();

    }

);