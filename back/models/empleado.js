
class Empleado{

    constructor(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono,direccion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.tipoDocumento=tipoDocumento;
        this.numeroDocumento=numeroDocumento;
        this.email=email;
        this.fechaNacimiento=fechaNacimiento;
        this.telefono=telefono;
        this.direccion=direccion;
    }

    //faltan getters and setters
}

module.exports=Empleado;