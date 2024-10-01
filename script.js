// Datos de las categorías y subcategorías
class subcategoria {
    constructor({nombre, productos = []}) {
        this.nombre = nombre;
        this.productos = productos;
    }
}
const aseoPersonal = new subcategoria({
    nombre: 'Aseo personal',
    productos: [{producto: 'Jabones corporales naturales', precio: 9000},
        {producto: 'Cepillo dental banbu', precio: 7500}, 
        {producto: 'Desodorante natural en barra', precio: 1500}]
})
const maquillaje = new subcategoria({
    nombre: 'Maquillaje',
    productos: [{producto: 'Corrector de ojeras organico en barra', precio: 59000},
        {producto: 'Perfume solido en polvo', precio: 31000}, 
        {producto: 'Rubor compacto organico', precio: 54900}]
})
const cuidadoDeLaPiel = new subcategoria({
    nombre: 'Cuidado de la piel',
    productos: [{producto: 'Tratamiento para cejas y pestañas', precio: 22300},
        {producto: 'Crema humectante', precio: 46000}, 
        {producto: 'Balsamo para bebé', precio: 32400}]
})
const catalogo = [
    {
        nombre: 'Bienestar',
        subcategorias: [aseoPersonal, maquillaje, cuidadoDeLaPiel],
    },
    {
        nombre: 'Aseo',
        subcategorias: ['Cuidado personal', 'Higiene corporal', 'Productos de limpieza']
    },
    {
        nombre: 'Hogar',
        subcategorias: ['Mobiliario', 'Decoración', 'Electrodomésticos']
    },
    {
        nombre: 'Mascotas',
        subcategorias: ['Alimentación', 'Cuidado e higiene', 'Accesorios']
    }
];

// Función para mostrar todas las categorías
function mostrarCategorias() {
    console.log('Categorías disponibles:');
    for (let i = 0; i < catalogo.length; i++) {
        console.log(`${i + 1}. ${catalogo[i].nombre}`);
    }
}

// Función para mostrar las subcategorías según la categoría seleccionada
function mostrarSubcategorias(indice) {
    switch (indice) {
        case 1:
            console.log(`Subcategorías de ${catalogo[0].nombre}:`);
            for (let i = 0; i < catalogo[0].subcategorias.length; i++) {
                console.log(` - ${catalogo[0].subcategorias[i].nombre}`);
            }
            let repetir = true
            do {
            let opcion = Number(prompt('Ingresar a \n1- Aseo personal \n2- Maquillaje \n3- Cuidado de la piel'))
                switch (opcion) {
                    case 1:
                        console.log(aseoPersonal.productos);
                        break;
                    case 1:
                        console.log(maquillaje.productos);
                        break;
                    case 1:
                        console.log(cuidadoDeLaPiel.productos);
                        break;
                    default:
                        console.log('Categria no definida')
                        break;
                }
                repetir = Number(prompt('Desea salir del menu \n 1- Si \n 2- No'))
                if (repetir == 1) {
                    repetir = false
                }
            } while (repetir);    
            break;
        case 2:
            console.log(`Subcategorías de ${catalogo[1].nombre}:`);
            for (let i = 0; i < catalogo[1].subcategorias.length; i++) {
                console.log(` - ${catalogo[1].subcategorias[i]}`);
            }
            break;
        case 3:
            console.log(`Subcategorías de ${catalogo[2].nombre}:`);
            for (let i = 0; i < catalogo[2].subcategorias.length; i++) {
                console.log(` - ${catalogo[2].subcategorias[i]}`);
            }
            break;
        case 4:
            console.log(`Subcategorías de ${catalogo[3].nombre}:`);
            for (let i = 0; i < catalogo[3].subcategorias.length; i++) {
                console.log(` - ${catalogo[3].subcategorias[i]}`);
            }
            break;
        default:
            console.log('Categoría no encontrada.');
            break;
    }
}

// Mostrar las categorías disponibles
mostrarCategorias();

// Pedir al usuario que seleccione una categoría
const seleccion = parseInt(prompt("Elige una categoría \n 1. Bienestar \n 2. Aseo \n 3. Hogar \n 4. Mascotas:"), 10);

// Mostrar subcategorías de la categoría seleccionada
mostrarSubcategorias(seleccion);


