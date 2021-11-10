const express = require('express');

const AdminController = require("../controllers/adminController");

class AdminRouter{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const ctrl = new AdminController();
        this.router.post('/',ctrl.createAdmin); 
    }
}

module.exports=AdminRouter;