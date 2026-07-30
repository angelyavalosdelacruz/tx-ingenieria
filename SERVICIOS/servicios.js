const servicios = {

  "barra-kelly": {
    titulo: "Reparación de Barra Kelly",
    descripcion: "Recuperamos componentes de perforación mediante reconstrucción por soldadura especializada, mecanizado de precisión y enderezamiento controlado de barras Kelly, restituyendo sus dimensiones y condiciones operativas para garantizar un desempeño confiable, mayor vida útil y continuidad en las operaciones.",
    imagenes: ["imageness/rbkelly.jpg", "imageness/rbkelly02.jpg", "imageness/rbkelly03.jpg", "imageness/rbkelly04.jpeg", "imageness/rbkelly05.jpeg","imageness/rbkelly06.jpeg","imageness/rbkelly07.jpeg"],
    detalles: [
      "Soldadura especializada en zonas críticas.",
      "Mecanizado de precisión en tolerancias.",
      "Enderezamiento controlado de barras Kelly.",
      "Vida útil prolongada y menor reemplazo."
    ]
  },

  "tanques-lodo": {
    titulo: "Fabricación y reparación de Tanques de Lodo",
    descripcion: "Fabricamos tanques de almacenamiento de lodo reforzados estructuralmente, diseñados para soportar las presiones de trabajo e incorporando un sistema de inyección de aire que mantiene la bentonita en suspensión y garantiza una mezcla homogénea, optimizando el rendimiento del fluido de perforación y la confiabilidad operativa.",
    imagenes: ["imageness/Tlodo.jpeg", "imageness/Tlodo02.jpeg", "imageness/Tlodo03.jpeg"],
    detalles: [
      "Estructura reforzada para alta presión.",
      "Inyección de aire que evita sedimentación.",
      "Mezcla homogénea de bentonita.",
      "Mayor confiabilidad en perforación."
    ]
  },

  "bentonita": {
    titulo: "Planta Mezcladora de Bentonita",
    descripcion: "Fabricamos plantas mezcladoras de bentonita diseñadas para preparar y homogeneizar fluidos de perforación mediante un sistema de mezcla eficiente, garantizando una distribución uniforme de la bentonita, estabilidad del fluido y un óptimo desempeño durante las operaciones de perforación.",
    imagenes: ["imageness/bentonita.jpeg"],
    detalles: [
      "Sistema de mezcla eficiente y homogéneo",
      "Distribución uniforme de bentonita",
      "Estabilidad del fluido de perforación",
      "Mayor rendimiento operativo"
    ]
  },

  "core-barrel": {
    titulo: "Fabricación y reparación de Core Barrel Drilling",
    descripcion: "Fabricamos y recuperamos Core Barrel mediante procesos de soldadura y mecanizado especializado, restaurando componentes clave como corona, tapa superior, portapicas y sistema retenedor. Aplicamos recubrimientos antidesgaste para prolongar la vida útil y garantizar un desempeño confiable en perforación.",
    imagenes: ["imageness/corebarrel.jpg", "imageness/corebd01.jpeg", "imageness/corebd03.jpeg", "imageness/corebd04.jpeg"],
    detalles: [
      "Soldadura y mecanizado especializado",
      "Recuperación de corona y tapa superior",
      "Reforzamiento de portapicas y sistema retenedor",
      "Protección antidesgaste en zonas críticas"
    ]
  },

  "helices": {
    titulo: "Fabricación y reparación de Hélices",
    descripcion: "En TX Ingeniería ofrecemos servicios especializados de reparación, reconstrucción y mantenimiento de barrenas para perforación. Nuestro servicio incluye inspección técnica, recuperación de diámetros, reemplazo de dientes de carburo de tungsteno, reparación de alas y hélices, reconstrucción de soldaduras estructurales y aplicación de dureza (Citodur 1000) resistentes al desgaste.",
    imagenes: ["imageness/rephelices.jpg", "imageness/rephelices02.jpg", "imageness/rephelices03.jpeg", "imageness/rephelices04.jpeg", "imageness/rephelices05.jpeg", ],
    detalles: [
      "Inspección técnica y recuperación de diámetros",
      "Reemplazo de dientes y reparación estructural",
      "Aplicación de dureza Citodur 1000",
      "Mayor vida útil y rendimiento en campo"
    ]
  },

  "baldes": {
    titulo: "Fabricación y reparación de Baldes",
    descripcion: "Servicio de fabricación y restauración de baldes para perforación, diseñados para soportar cargas pesadas.",
    imagenes: ["imageness/repbaldes02.jpg", "imageness/repbaldes.jpg"],
    detalles: [
      "Soldadura estructural",
      "Refuerzo de componentes",
      "Alta resistencia al desgaste",
      "Uso en operaciones continuas"
    ]
  },

  "tremie": {
    titulo: "Fabricación de Jaula y Tubo Tremie",
    descripcion: "Producción de jaulas y tubos Tremie, indispensables para la colocación controlada de concreto bajo agua.",
    imagenes: ["imageness/tremie0.jpeg", "imageness/tremie000.jpeg", "imageness/tremie02.jpeg", "imageness/tremie03.jpeg"],
    detalles: [
      "Flujo continuo de concreto",
      "Estabilidad en cimentaciones",
      "Evita segregación del material",
      "Aplicación subacuática"
    ]
  },

  "distribuidor-aire": {
    titulo: "Fabricación de Distribuidor de aire (industrial)",
    descripcion: "Producción de distribuidores de aire de alto rendimiento para sistemas neumáticos industriales.",
    imagenes: ["imageness/fabdistr.jpeg","imageness/fabdistr01.png"],
    detalles: [
      "Distribución uniforme",
      "Control de flujo",
      "Alta precisión",
      "Resistencia industrial"
    ]
  }

};

// ======================
// OBTENER ID (UNA SOLA VEZ)
// ======================
const params = new URLSearchParams(window.location.search);

let id = params.get("id");

id = id ? id.trim().toLowerCase() : "";

const data = servicios[id];

// VALIDACIÓN
// ======================
if (!data) {
  document.body.innerHTML = `
    <div style="text-align:center;padding:40px;">
      <h1>Servicio no encontrado</h1>
      <p>Verifica el enlace o regresa al catálogo.</p>
    </div>
  `;
  throw new Error("ID inválido: " + id);
}

if (!data) {

console.log("ID recibido:", id);

document.getElementById("titulo").textContent =
"Servicio no encontrado";

document.getElementById("descripcion").textContent =
"Verifica el enlace del servicio.";

document.querySelector(".carrusel-section").style.display="none";

document.querySelector(".info").style.display="none";

throw new Error("Servicio inválido");

}// ======================
// RENDER TEXTO
// ======================
document.getElementById("titulo").textContent = data.titulo;
document.getElementById("descripcion").textContent = data.descripcion;

// detalles
const ul = document.getElementById("detalles");
ul.innerHTML = "";

data.detalles.forEach(d => {
  const li = document.createElement("li");
  li.textContent = d;
  ul.appendChild(li);
});

// ======================
// CARRUSEL
// ======================
let i = 0;
const img = document.getElementById("img");

function updateImage() {
  img.src = data.imagenes[i];
}

window.next = function () {
  i = (i + 1) % data.imagenes.length;
  updateImage();
};

window.prev = function () {
  i = (i - 1 + data.imagenes.length) % data.imagenes.length;
  updateImage();
};

updateImage();

// ======================
// RECOMENDADOS
// ======================
const contenedor =
document.getElementById(
"recomendados"
);

if(contenedor){

contenedor.innerHTML="";

const sugeridos =

Object.entries(
servicios
)

.filter(
([key])=>
key!==id
)

.slice(
0,
4
);

sugeridos.forEach(
([key,serv])=>{

contenedor.innerHTML+=`

<div class="card">

<h3>

${serv.titulo}

</h3>

<p>

${serv.descripcion
.substring(
0,
110
)}

...

</p>

<a href="?id=${key}">

Ver servicio

</a>

</div>

`;

});

contenedor.innerHTML+=`

<div class="ver-mas">
<a
href="SERVICIOS.html#servicios"
>

VER MÁS SERVICIOS

</a>

</div>

`;

}
