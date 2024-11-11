import { usuarios } from "./database.js";

document.getElementById('cuenta').addEventListener('click', mostrarPanelInicioDeSesion)
document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion)
document.getElementById('btnRegistrarUsuario').addEventListener('click', registrarUsuario)

function mostrarPanelInicioDeSesion() {
    formRegister.classList.add("hidden");
    formLogin.classList.remove("hidden");
}   
function iniciarSesion() {
    let nombreusuario = document.getElementById('usuario').value
    let contrasena = document.getElementById('contrasena').value

    let confirmarUsuario = usuarios.find((usuario) => {
        if (usuario.nombreUsuario == nombreusuario && usuario.contrasena == contrasena) {
            let timerInterval;
            Swal.fire({
                title: "¡Bienvenido!",
                html: "Iniciando sesión <h1></h1> milliseconds.",
                timer: 1000,
                timerProgressBar: true,
                icon: 'suses',
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("h1");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    window.location.href = 'index.html'
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        }else{
            Swal.fire({
                title: "Error",
                text: "Usuario y/o contraseña incorrectos o no existen",
                icon: "error"
              });
        }
    })

}
function registrarUsuario() {
    let nombre = document.getElementById('rNombre').value
    let correo = document.getElementById('rCorreo').value
    let contrasena = document.getElementById('rContrasena').value
    let registroUsuario = document.getElementById('rUsuario').value
    let usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        nombreUsuario: registroUsuario
    }
    usuarios.push(usuario)
}

/*Carol rivera*/
// Crear una funcion que permita al usuario hacer una busqueda de productos.
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categorySelect').addEventListener('change', filterProducts);

function busquedaDeProductos() {
    /Carol rivera/
    // Crear una funcion que permita al usuario hacer una busqueda de productos. 
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categorySelect').value;
    const products = document.querySelectorAll('#productList li');

    products.forEach(product => {
        const productName = product.textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category');

        const matchesSearch = productName.includes(searchQuery);
        const matchesCategory = selectedCategory === 'all' || productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


function agregarAlCarrito(params) {
    /*Sebastian Pedroza */
    //Crear una funcion en la cual el usuario pueda agregar un producto al carrito de compras.
}

//------------------------------------------------------//
//------------------------------------------------------//


// Seleccionamos los elementos de los botones y formularios
// const formLogin = document.getElementById("form-login");
// const formRegister = document.getElementById("form-register");
// const btnLogin = document.getElementById("btnLogin");
// const btnRegistro = document.getElementById("btnRegistro");

// // Al hacer clic en "¿No tienes cuenta?", mostramos el formulario de registro y ocultamos el de inicio de sesión
// btnLogin.addEventListener("click", (event) => {
//     event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
//     formLogin.classList.add("hidden");
//     formRegister.classList.remove("hidden");
// });

// // Al hacer clic en "¿Ya tienes una cuenta?", mostramos el formulario de inicio de sesión y ocultamos el de registro
// btnRegistro.addEventListener("click", (event) => {
//     event.preventDefault(); // Evita cualquier acción predeterminada, como recargar la página
//     formRegister.classList.add("hidden");
//     formLogin.classList.remove("hidden");
// });

