const ROOT =
window.location.pathname.includes("/PRODUCTOS/")
||
window.location.pathname.includes("/SERVICIOS/")
||
window.location.pathname.includes("/CONTACTO/")
||
window.location.pathname.includes("/CONOCENOS/")
||
window.location.pathname.includes("/CATALOGO/")
||
window.location.pathname.includes("/CUENTA/")
? "../"
: "";


/* ======================
ELEMENTOS
====================== */

const elementosBusqueda=[

/* PRODUCTOS */

{nombre:"BIG PILOTO",imagen:"bigpilotos.png",url:"PRODUCTOS/detproductos.html?id=1"},
{nombre:"BASE DE BIG PILOTO",imagen:"basebig.png",url:"PRODUCTOS/detproductos.html?id=2"},
{nombre:"ACOPLE CODO DE 90° TIPO BAUER",imagen:"codo90.png",url:"PRODUCTOS/detproductos.html?id=3"},
{nombre:"ACOPLE CODO DE 45° TIPO BAUER",imagen:"codo45.png",url:"PRODUCTOS/detproductos.html?id=4"},
{nombre:"ACOPLE CODO T TIPO BAUER DE 4",imagen:"acopleT.png",url:"PRODUCTOS/detproductos.html?id=5"},
{nombre:"ACOPLE CODO Y TIPO BAUER DE 4",imagen:"acopleY.png",url:"PRODUCTOS/detproductos.html?id=6"},
{nombre:"PINES DE EXPANSION",imagen:"Pexpansion.png",url:"PRODUCTOS/detproductos.html?id=7"},
{nombre:"PICAS REVESTIDA OVERLAY",imagen:"picas.png",url:"PRODUCTOS/detproductos.html?id=8"},
{nombre:"TACOS INTERCAMBIABLES",imagen:"tacosint.png",url:"PRODUCTOS/detproductos.html?id=9"},
{nombre:"PORTA PICAS",imagen:"portapicas.png",url:"PRODUCTOS/detproductos.html?id=10"},
{nombre:"BASE DE TACOS INTERCAMBIABLES",imagen:"basetacos.png",url:"PRODUCTOS/detproductos.html?id=11"},
{nombre:"ROLET BIG DRILLING",imagen:"roletbig.png",url:"PRODUCTOS/detproductos.html?id=12"},
{nombre:"CAJA KELLY BOX",imagen:"cajakelly.png",url:"PRODUCTOS/detproductos.html?id=13"},
{nombre:"SACA PICAS",imagen:"sacapicas.png",url:"PRODUCTOS/detproductos.html?id=14"},
{nombre:"ACOPLAMIENTO RAPIDO",imagen:"acoprap.png",url:"PRODUCTOS/detproductos.html?id=15"},
{nombre:"PORTA PICAS (TEETH HOLDER)",imagen:"portapicas.png",url:"PRODUCTOS/detproductos.html?id=16"},
{nombre:"CABEZALES DE TUBO TREMIE",imagen:"tremie.png",url:"PRODUCTOS/detproductos.html?id=17"},
{nombre:"BROCA DE DIENTES PLANOS",imagen:"brocad.png",url:"PRODUCTOS/detproductos.html?id=18"},



/* SERVICIOS */

{
nombre:"FABRICACION Y REPARACION DE BARRA KELLY",
url:"SERVICIOS/detservicios.html?id=barra-kelly"
},

{
nombre:"FABRICACION Y REPARACION DE TANQUES DE LODO",
url:"SERVICIOS/detservicios.html?id=tanques-lodo"
},

{
nombre:"PLANTA MEZCLADORA DE BENTONITA",
url:"SERVICIOS/detservicios.html?id=bentonita"
},

{
nombre:"FABRICACION Y REPARACION DE CORE BARREL DRILLING",
url:"SERVICIOS/detservicios.html?id=core-barrel"
},

{
nombre:"FABRICACION Y REPARACION DE HELICES",
url:"SERVICIOS/detservicios.html?id=helices"
},

{
nombre:"FABRICACION Y REPARACION DE BALDES",
url:"SERVICIOS/detservicios.html?id=baldes"
},
{
nombre:"FABRICACION DE JAULA Y TUBO TREMIE",
url:"SERVICIOS/detservicios.html?id=tremie"
},
{
nombre:"FABRICACION DE DISTRIBUIDOR DE AIRE",
url:"SERVICIOS/detservicios.html?id=distribuidor-aire"
}

].map(x=>({

...x,

url:
ROOT+
x.url,

imagen:
x.imagen
?
ROOT+
"PRODUCTOS/imagenesp/"
+
x.imagen
:
null

}));



function coincide(

nombre,

texto

){

const palabras=

nombre
.toLowerCase()
.split(" ");


/* SOLO PRIMERA Y SEGUNDA PALABRA */

return(

palabras[0]
?.startsWith(
texto
)

||

palabras[1]
?.startsWith(
texto
)

);

}



document.addEventListener(

"DOMContentLoaded",

()=>{

const input=
document.getElementById(
"searchInput"
);

const resultados=
document.getElementById(
"searchResults"
);

const boton=
document.getElementById(
"searchBtn"
);

if(
!input
||
!resultados
)
return;



function buscar(){

const texto=
input.value
.trim()
.toLowerCase();

resultados.innerHTML="";

if(
!texto
){

resultados.style.display=
"none";

return;

}

const encontrados=

elementosBusqueda.filter(

x=>

coincide(

x.nombre,

texto

)

);

if(
!encontrados.length
){

resultados.style.display=
"none";

return;

}

encontrados
.slice(0,8)
.forEach(

item=>{

const div=
document.createElement(
"div"
);

div.className=
"resultado-item";

div.innerHTML=`

${
item.imagen

?

`<img src="${item.imagen}">`

:

""
}

<span>

${item.nombre}

</span>

`;

div.onclick=
()=>{

location.href=
item.url;

};

resultados.appendChild(
div);

}

);

resultados.style.display=
"block";

}



function abrir(){

const texto=
input.value
.trim()
.toLowerCase();

const r=

elementosBusqueda.find(

x=>

coincide(

x.nombre,

texto

)

);

if(
r
){

location.href=
r.url;

}

}



input.addEventListener(
"input",
buscar
);

input.addEventListener(
"keydown",

e=>{

if(
e.key==="Enter"
){

abrir();

}

}

);

boton.onclick=
abrir;

});