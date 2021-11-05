const express = require('express');

const HistoryController =  require('../controllers/historyController');

class HistoryRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const crtl = new HistoryController();
        this.router.get('/histories',crtl.getHistories);
        this.router.post('/histories',crtl.createHistory);
        this.router.delete('/histories',crtl.deleteHistory);
        this.router.put('/histories',crtl.updateHistory);

    }

}

module.exports=HistoryRouter;