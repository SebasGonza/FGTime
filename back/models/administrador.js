const Empleado = require("./empleado");

class Administrador extends Empleado{

    constructor(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono){
        super(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono);
    }

    static crearAdmin();
}

module.exports=Administrador;