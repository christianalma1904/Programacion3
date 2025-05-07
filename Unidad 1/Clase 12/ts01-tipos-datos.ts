let cantidad : number = 19;
let nombre: string = "JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("Cantidad", cantidad);
console.log("Nombre", nombre);
console.log("Opcion", opcion);

//any: acepta todo tipo de variable
let opcional: any = "comodin any";
opcional = 100;

//Tipos de Datos Compuestos
let equipos: string[] = ["Barcelona", "Real Madrid", "Ecuador", "Vino Tinto", "Liga"];
console.log("Equipos ", equipos);

let edades: Array<number> = [10, 12, 23, 456];
console.log("Edades ", edades);

//Tuplas
let persona: [string, number] = ["Pedro", 6161616];
console.log("Alumno ", persona);

//Enums
enum Estados {
    PENDIENTE,
    ENVIADO,
    ENTREGADO
}
let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);