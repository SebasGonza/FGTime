const express = require('express');

const UserController =  require('../controllers/userController');

class UserRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const crtl = new UserController();
        this.router.get('/users',crtl.getUsers);
        this.router.post('/users',crtl.createUser);
        this.router.delete('/users',crtl.deleteUser);
        this.router.put('/users',crtl.updateUser);

    }

}

module.exports=UserRouter;