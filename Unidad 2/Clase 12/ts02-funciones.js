function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
console.log(saludar("Betty Marmol"));
//Parametros Opcionales
function obtenerApellido(apellido) {
    return "Mi apellido, ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad, ".concat(edad, " a\u00F1os");
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
//Funciones Flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("La Suma es:", sumar(5, 4));
function mostrarInformacion(informacion) {
    console.log(informacion);
}
mostrarInformacion("Suceso en el Norte de Quito");
//Tipar Funciones como Variables
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("Resultado de la Suma:", operacion(15, 30));
//Funcion que Recibe un Arreglo String y Salude a cada Persona
function saludarPersona(nombres) {
    nombres.forEach(function (nombre) {
        console.log("Hola ".concat(nombre));
    });
}
var personas = ["Ana", "Juan", "Mario"];
saludarPersona(personas);
