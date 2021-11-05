class UserController{

    constructor(){

    }

    // Methods 

    getUsers(req,res){
        req.getConnection( (err,conn) => {
            conn.query('select * from  Colaborador',(err,data) => {
                if(err){
                    res.status(500).json(err);
                }
                res.status(200).json(data);
            })
        })
    }

    createUser(req,res){
        let body = req.body;
        req.getConnection( (err,conn) => {
            conn.query('insert into Colaborador set ?',[body],(err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(201).send();
                }

            });
        })
    }

    deleteUser(req,res){
        let {id} = req.body;
        req.getConnection( (err,conn) => {
            conn.query('delete from Colaborador where id = ?',[id], (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
        });
    }
    
    updateUser(req,res){
        let {id} = req.body;
        let body = req.body;
        req.getConnection( (err,conn) => {
            conn.query('update Colaborador set ? where id = ?',[body,id], (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
        });
    }

}

module.exports=UserController