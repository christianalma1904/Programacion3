var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("Empleado", empleado);
function login(credencial) {
    console.log("Bienvenido", credencial.usuario);
}
var miUsuario = {
    clave: "123",
    usuario: "Jesus"
};
login(miUsuario);
