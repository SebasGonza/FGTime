

class User{

    constructor(nombreUsuario,password,rol){
        this.nombreUsuario=nombreUsuario;
        this.password=password;
        this.rol=rol;
    }

    getNombreUsuario(){
        return this.nombreUsuario;
    }

    setNombreUsuario(nombre){
        this.nombreUsuario=nombre;
    }

    getRol(){
        return this.rol;
    }

    setRol(rol){
        this.rol=rol;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password){
        this.password=password;
    }

    static crearUsuario();
    static buscarUsuario();
    static eliminarUsuario();
    static editarUsuario();
    verificaSesion();


}

module.exports=User;