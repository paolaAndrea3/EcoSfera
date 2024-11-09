const productos = [{
    nombrePoducto: 'Jabones de mano naturales',
    precio: 5900,
    descripcion: 'lorem ipsum',
    categoria: 'Aseo personal'
},
{
    nombrePoducto: 'Cepillo de dienntes ecologico',
    precio: 13900,
    descripcion: 'lorem ipsum',
    categoria: 'Aseo personal'
},
{
    nombrePoducto: 'Rubor pasta dura',
    precio: 301900,
    descripcion: 'lorem ipsum',
    categoria: 'Maquillaje'
},
{
    nombrePoducto: 'shampoo antipulgas para perro',
    precio: 19900,
    descripcion: 'lorem ipsum',
    categoria: 'Mascotas'
}]

function busquedaDeProductos() {
    /*Carol rivera*/
    // Crear una funcion que permita al usuario hacer una busqueda de productos. 
}


function agregarAlCarrito(params) {
    /*Sebastian Pedroza */
    //Crear una funcion en la cual el usuario pueda agregar un producto al carrito de compras.
}

//------------------------------------------------------//
//------------------------------------------------------//


// Seleccionamos los elementos de los botones y formularios
const formLogin = document.getElementById("form-login");
const formRegister = document.getElementById("form-register");
const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");

// Al hacer clic en "¿No tienes cuenta?", mostramos el formulario de registro y ocultamos el de inicio de sesión
btnLogin.addEventListener("click", (event) => {
    event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
    formLogin.classList.add("hidden");
    formRegister.classList.remove("hidden");
});

// Al hacer clic en "¿Ya tienes una cuenta?", mostramos el formulario de inicio de sesión y ocultamos el de registro
btnRegistro.addEventListener("click", (event) => {
    event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
    formRegister.classList.add("hidden");
    formLogin.classList.remove("hidden");
});

