const admin = require("../models/administrador");

class AdminController{
    
    createAdmin(req,res){
        let body = req.body;
        

        if(admin.crearAdmin(body)){
            res.status(500).send();
        }else{
            res.status(201).send();
        }
    }
}

module.exports=AdminController;