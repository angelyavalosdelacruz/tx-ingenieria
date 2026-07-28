//==========================
// CUENTAS TX
//==========================

const usuarios =

JSON.parse(

localStorage.getItem(
"usuarios"
)

||

"[]"

);


//==========================
// LOGIN
//==========================

const loginForm =

document.getElementById(
"loginForm"
);

if(
loginForm
){

loginForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();

const email =

document
.getElementById(
"email"
)

.value

.trim()

.toLowerCase();

const password =

document
.getElementById(
"password"
)

.value;


const usuario =

usuarios.find(

u=>

u.correo===email

&&

u.password===password

);


const msg=

document.getElementById(
"mensaje"
);


if(
!usuario
){

msg.textContent=

"Correo o contraseña incorrectos";

msg.style.color=

"#d10000";

return;

}


localStorage.setItem(

"usuarioActivo",

JSON.stringify(
usuario
)

);


msg.textContent=

`Bienvenido ${usuario.nombre}`;

msg.style.color=

"#00a859";


setTimeout(

()=>{

window.location.href=

"../index.html";

},

1200

);

}

);

}



//==========================
// REGISTRO
//==========================

const registro =

document.querySelector(
".formulario"
);

if(
registro
&&
document.getElementById(
"nombre"
)
){

const boton =

document.querySelector(
".btn-cuenta"
);

boton?.addEventListener(

"click",

()=>{

const nombre=

document
.getElementById(
"nombre"
)
.value
.trim();

const apellido=

document
.getElementById(
"apellido"
)
.value
.trim();

const correo=

document
.getElementById(
"correo"
)
.value
.trim()
.toLowerCase();

const telefono=

document
.getElementById(
"telefono"
)
.value;

const pass=

document
.getElementById(
"pass"
)
.value;

const confirmar=

document
.getElementById(
"confirmar"
)
.value;


if(

!nombre
||
!apellido
||
!correo
||
!telefono
||
!pass

){

alert(
"Completa todos los campos"
);

return;

}


if(
pass
!==

confirmar
){

alert(
"Las contraseñas no coinciden"
);

return;

}


const existe=

usuarios.find(

u=>

u.correo===correo

);


if(
existe
){

alert(
"Ya existe una cuenta"
);

return;

}


usuarios.push({

nombre,

apellido,

correo,

telefono,

password:pass

});


localStorage.setItem(

"usuarios",

JSON.stringify(
usuarios
)

);


localStorage.setItem(

"usuarioActivo",

JSON.stringify({

nombre,

correo

})

);


alert(
"Cuenta creada"
);


window.location.href=

"../index.html";

}

);

}