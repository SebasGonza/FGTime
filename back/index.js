const express = require('express'); 
const morgan = require('morgan');
require('./database/database');

const AdminRoutes = require('./routes/adminRouter');

const app = express();

//instances to routes
const adminRouter = new AdminRoutes();



//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes
app.use('/', adminRouter.router);

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});