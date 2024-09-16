// Clase principal para Categoría
class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.subcategorias = [];
    }

    // Método para agregar subcategoría
    agregarSubcategoria(subcategoria) {
        this.subcategorias.push(subcategoria);
    }

    // Mostrar todas las subcategorías
    mostrarSubcategorias() {
        console.log(`Subcategorías de ${this.nombre}:`);
        this.subcategorias.forEach(subcat => {
            console.log(` - ${subcat}`);
        });
    }
}

// Crear instancias de Categoría y agregar subcategorías
class Catalogo {
    constructor() {
        this.categorias = [];
    }

    // Método para agregar categorías
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }

    // Método para mostrar todas las categorías
    mostrarCategorias() {
        console.log('Categorías disponibles:');
        this.categorias.forEach((categoria, index) => {
            console.log(`${index + 1}. ${categoria.nombre}`);
        });
    }

    // Método para seleccionar una categoría y mostrar sus subcategorías
    seleccionarCategoria(indice) {
        const categoria = this.categorias[indice - 1]; // -1 porque el array empieza en 0
        if (categoria) {
            categoria.mostrarSubcategorias();
        } else {
            console.log('Categoría no encontrada.');
        }
    }
}

// Instancia de la clase Catálogo
const catalogo = new Catalogo();

// Categoría: Bienestar
const bienestar = new Categoria('Bienestar');
bienestar.agregarSubcategoria('Salud mental');
bienestar.agregarSubcategoria('Fitness');
bienestar.agregarSubcategoria('Nutrición');

// Categoría: Aseo
const aseo = new Categoria('Aseo');
aseo.agregarSubcategoria('Cuidado personal');
aseo.agregarSubcategoria('Higiene corporal');
aseo.agregarSubcategoria('Productos de limpieza');

// Categoría: Hogar
const hogar = new Categoria('Hogar');
hogar.agregarSubcategoria('Mobiliario');
hogar.agregarSubcategoria('Decoración');
hogar.agregarSubcategoria('Electrodomésticos');

// Categoría: Mascotas
const mascotas = new Categoria('Mascotas');
mascotas.agregarSubcategoria('Alimentación');
mascotas.agregarSubcategoria('Cuidado e higiene');
mascotas.agregarSubcategoria('Accesorios');

// Agregar categorías al catálogo
catalogo.agregarCategoria(bienestar);
catalogo.agregarCategoria(aseo);
catalogo.agregarCategoria(hogar);
catalogo.agregarCategoria(mascotas);

// Mostrar las categorías disponibles
catalogo.mostrarCategorias();

// Pedir al usuario que seleccione una categoría
const seleccion = parseInt(prompt("Elige una categoría (1-4):"), 10);

// Mostrar subcategorías de la categoría seleccionada
catalogo.seleccionarCategoria(seleccion);
