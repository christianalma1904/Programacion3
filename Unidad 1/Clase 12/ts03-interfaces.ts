interface Persona{
    nombre: string,
    apellido: string
}

let empleado: Persona = {
    nombre: "Bob",
    apellido: "Marley"
}
console.log("Empleado", empleado);

interface Credenciales{
    clave: string,
    usuario: string
}

function login(credencial: Credenciales): void{
    console.log("Bienvenido", credencial.usuario);
}
let miUsuario: Credenciales = {
    clave: "123",
    usuario: "Jesus"
}

login(miUsuario);