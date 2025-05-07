function saludar(nombre: string): string{
    return `Hola, ${nombre}`;
}
console.log(saludar("Betty Marmol"));

//Parametros Opcionales
function obtenerApellido(apellido?: string){
    return `Mi apellido, ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());

function obtenerEdad(edad: number = 18){
    return `Mi edad, ${edad} años`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

//Funciones Flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("La Suma es:", sumar(5,4));

function mostrarInformacion(informacion: string): void{
    console.log(informacion);
}
mostrarInformacion("Suceso en el Norte de Quito");

//Tipar Funciones como Variables
let operacion: (x: number, y: number) => number;
operacion = function(a, b){
    return a + b;
}
console.log("Resultado de la Suma:", operacion(15, 30));

//Funcion que Recibe un Arreglo String y Salude a cada Persona
function saludarPersona(nombres: string[]): void{
    nombres.forEach(nombre => {
        console.log(`Hola ${nombre}`);
    });
}

const personas: string[] = ["Ana", "Juan", "Mario"];
saludarPersona(personas);