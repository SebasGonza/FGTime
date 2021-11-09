const Empleado = require("./empleado");

class Administrador extends Empleado{

    constructor(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono,usuario){
        super(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono);
        this.usuario=usuario;
    }

    static crearAdmin();
}

module.exports=Administrador;