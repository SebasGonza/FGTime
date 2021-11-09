const Empleado = require("./empleado");

class Operario extends Empleado{

    constructor(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono){
        super(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono);
    }

    static crearOperario();
}

module.exports=Operario;