
class HistoryController{

    constructor(){

    }

    // Methods 

    getHistories(req,res){
        req.getConnection( (err,conn) => {
            conn.query('select * from  Historia_clinica',(err,data) => {
                if(err){
                    res.status(500).send();
                }
                res.status(200).json(data);
            })
        })
    }

    createHistory(req,res){
        let body = req.body;
        req.getConnection( (err,conn) => {
            conn.query('insert into Historia_clinica set ?',[body],(err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(201).send();
                }

            });
        })
    }

    deleteHistory(req,res){
        let {id} = req.body;
        req.getConnection( (err,conn) => {
            conn.query('delete from Historia_clinica where id = ?',[id], (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
        });
    }
    
    updateHistory(req,res){
        let {id} = req.body;
        let body = req.body;
        req.getConnection( (err,conn) => {
            conn.query('update Historia_clinica set ? where id = ?',[body,id], (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            })
        });
    }

}

module.exports=HistoryController