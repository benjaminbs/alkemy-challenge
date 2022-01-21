const express = require('express');
const mysql = require('mysql2');
const con = require('express-myconnection');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

//Port default services or especific port
app.set('port', process.env.PORT || 3001)

const dbOptions = {
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'xeS47c&aa',
		database: 'budget'
}
//Middlewares

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(con(mysql, dbOptions, 'single'));
app.use(morgan('dev'));


//Routes
app.use('/api', routes);


//Files

//Server running
app.listen(app.get('port'), () =>{
	console.log('Server online');

})