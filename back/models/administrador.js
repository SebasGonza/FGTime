const Empleado = require("./empleado");
const conn = require("../database/database");

class Administrador extends Empleado{

    constructor(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono,direccion){
        super(nombre,apellido,tipoDocumento,numeroDocumento,email,fechaNacimiento,telefono,direccion);
    }

    static crearAdmin(obj){
        let resultado = false;
        if(conn){
            let sql='insert into usuario set ?';

            conn.query(sql,[obj],(err,data)=>{
                if(err){
                    throw err
                }else{
                    return resultado;
                }
            });
        }
        return resultado;
    }
}

module.exports=Administrador;