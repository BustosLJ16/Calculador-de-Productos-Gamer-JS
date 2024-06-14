let nombreUsuario = prompt("Ingrese Su Nombre: - [ESC Para salir]");

while (nombreUsuario.toUpperCase() !== "ESC") {

    // Selección de Productos
    let mensajeProductos = nombreUsuario + ", por favor, indique el producto #1 y #2 que desea comprar:\n";
    mensajeProductos += "1. Auris Redragon H120 $19.000\n";
    mensajeProductos += "2. Teclado Redragon Kumara K552 $45.000\n";
    mensajeProductos += "3. Monitor LG 24'' 24MK430H-B $149750\n";
    mensajeProductos += "4. Mouse Redragon Centrophorus M601 $17.000\n";
    mensajeProductos += "5. Webcam Logitech C925E $23.100";

    let producto1 = parseInt(prompt(mensajeProductos)); // Ingreso del Producto #1

    // Validación de seleccion de mis productos
    while (producto1 !== 1 && producto1 !== 2 && producto1 !== 3 && producto1 !== 4 && producto1 !== 5) {
        alert("Esa opción no es válida. Por favor, selecciona 1, 2, 3, 4 o 5");
        producto1 = parseInt(prompt(mensajeProductos));
    }

    let producto2 = parseInt(prompt(mensajeProductos)); // Ingreso del Producto #2

    // Validación de seleccion de mis productos 
    while (producto2 !== 1 && producto2 !== 2 && producto2 !== 3 && producto2 !== 4 && producto2 !== 5) {
        alert("Esa opción no es válida. Por favor, selecciona 1, 2, 3, 4 o 5");
        producto2 = parseInt(prompt(mensajeProductos));
    }

    console.log(nombreUsuario + " Seleccionó los productos: " + producto1 + " " + producto2); // chequeo de datos

    // Sección e Ingreso del cupón
    let cupon = "CUPON10";
    let mensajeCupon = "¿Usted tiene un cupón de descuento?\n";
    mensajeCupon += "1. SI\n";
    mensajeCupon += "2. NO";
    let preguntarPorCupon = parseInt(prompt(mensajeCupon));

    // Proceso de datos
    // Precio y Cuenta de los Productos
    let precio1, precio2;

    if (producto1 === 1) {
        precio1 = 19000;
    } else if (producto1 === 2) {
        precio1 = 45000;
    } else if (producto1 === 3) {
        precio1 = 149750;
    } else if (producto1 === 4) {
        precio1 = 17000;
    } else if (producto1 === 5) {
        precio1 = 23100;
    } else {
        console.log("Producto 1 no válido");
    }

    if (producto2 === 1) {
        precio2 = 19000;
    } else if (producto2 === 2) {
        precio2 = 45000;
    } else if (producto2 === 3) {
        precio2 = 149750;
    } else if (producto2 === 4) {
        precio2 = 17000;
    } else if (producto2 === 5) {
        precio2 = 23100;
    } else {
        console.log("Producto 2 no válido");
    }

    // Cuentas de precios
    let resultado = precio1 + precio2; // Suma de los precios
    let precioConCupon = resultado * 0.9; // Precio final CON Cupón
    let precioSinCupon = resultado; // Precio final SIN Cupón

    // Mensajes con el descuento aplicado y sin Aplicarlo
    let mensajeConDescuento = nombreUsuario + " ¡Su compra fue efectuada con éxito!\n";
    mensajeConDescuento += "Su compra fue de los productos: #" + producto1 + " y #" + producto2 + "\n";
    mensajeConDescuento += "Con un valor de: $" + precioSinCupon + "\n";
    mensajeConDescuento += "Cupón de descuento aplicado con éxito con valor final: $" + precioConCupon;
    let mensajeSinDescuento = nombreUsuario + " ¡Su compra fue efectuada con éxito!\n";
    mensajeSinDescuento += "Su compra fue de los productos: #" + producto1 + " y #" + producto2 + "\n";
    mensajeSinDescuento += "Con un valor de: $" + precioSinCupon + "\n";


    // Procesamiento del cupón
    while (preguntarPorCupon !== 1 && preguntarPorCupon !== 2) {
        alert("Esa opción no es válida. Por favor, selecciona 1 o 2");
        preguntarPorCupon = parseInt(prompt(mensajeCupon));
    }

    // Validación del Cupón
    if (preguntarPorCupon === 1) {
        let tieneCupon = prompt("Ingrese Aquí su CUPÓN");
        if (tieneCupon.toUpperCase() === "CUPON10") {
            alert("Tu Cupón es válido. Se aplicará el descuento a tu compra!");
            alert(mensajeConDescuento);
        } else {
            alert("Lo sentimos mucho. Tu cupón NO es válido.");
            alert(mensajeSinDescuento);
        }
    } else if (preguntarPorCupon === 2) {
        alert("Lo sentimos mucho. Esperamos que tengas uno para la próxima compra.");
        alert(mensajeSinDescuento);
    }

    // Pregunta para continuar o finalizar el programa
    let mensajeDeCierre = nombreUsuario + ", ¿Qué desea hacer ahora?\n 1. Hacer otra compra\n 2. Finalizar el programa";
    let finalizar = parseInt(prompt(mensajeDeCierre));

    while (finalizar !== 1 && finalizar !== 2) {
        alert("Esa opción no es válida. Por favor, selecciona 1 o 2");
        finalizar = parseInt(prompt(mensajeDeCierre));
    }

    if (finalizar === 1) {
        nombreUsuario = prompt("Ingrese Su Nombre: - [ESC Para salir]");
    } else if (finalizar === 2) {
        alert("Muchas gracias por usar nuestra calculadora. ¡Hasta pronto!");
        break;
    }
}

// Alerta de cierre del programa, si el usuario escribio "ESC" en la primera entrada de datos (Nombre)
alert("decidiste salir del calculador. ¡Hasta luego!");