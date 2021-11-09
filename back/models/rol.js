
class Rol{

    constructor(nombre){
        this.nombre=nombre;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }

    verificaRol();
}

module.exports=Rol;