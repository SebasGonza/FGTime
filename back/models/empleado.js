
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

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }

    getApellido(){
        return this.apellido;
    }

    setApellido(apellido){
        this.apellido=apellido;
    }

    getTipoDocumento(){
        return this.tipoDocumento;
    }

    setTipoDocumento(tipoDocumento){
        this.tipoDocumento=tipoDocumento;
    }

    getNumeroDocumento(){
        return this.numeroDocumento;
    }

    setNumeroDocumento(numeroDocumento){
        this.numeroDocumento=numeroDocumento;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email=email;
    }

    getFechaNacimiento(){
        return this.fechaNacimiento;
    }

    setFechaNacimiento(fechaNacimiento){
        this.fechaNacimiento=fechaNacimiento;
    }

    getTelefono(){
        return this.telefono;
    }

    setTelefono(telefono){
        this.telefono=telefono;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion=direccion;
    }
    
}

module.exports=Empleado;