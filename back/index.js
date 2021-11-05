const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const HistoryRoutes = require('./routes/historyRouter');
const UserRoutes = require('./routes/userRouter');

const app = express();

//instances to routes
const hisRouter = new HistoryRoutes();
const usuRouter = new UserRoutes();



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: "veterinariabd"
}, 'single'));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes
app.use('/', hisRouter.router);
app.use('/', usuRouter.router);

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});