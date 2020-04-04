const express = require('express');
const tempEngine = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./app/routes/routes');
const morgan = require('morgan');
const db = require('./app/dbConfig/db');
const axios = require('axios')

//const db = require('db')
//const cors = require('cors');

const app = express();

/////////******** EXTERNAL POST AND GET REQUESTS ***//////////////
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods:POST');
	res.header('Access-Control-Allow-Headers:Origin, Methods, Content-Type');

	next();
});

let axiosConfig = {
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		'Access-Control-Allow-Origin': '*'
	}
};

axios.post(
	'https://mysms.celcomafrica.com/api/services/sendsms/',
	{
		apikey: '576db83e8eaaf9fbdcd186e49484b7cd',
		partnerID: '1032',
		message: 'thisisatestmessage',
		shortcode: 'Celcom',
		mobile: '254796809003'
	},
	axiosConfig
)
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.log(error);
	});
//////////*** BD CONNECTION & TESTING ***//////////

db
	.authenticate()
	.then(() => console.log('DATABASE_CONNECTED'))
	.catch((error) => console.log('AN ERROR OCCURRED', error));

/////////*** EXTERNAL SYNTACTIC SUGARS ***/////////

app.use(morgan('dev'));

/////////*** REQUESTS GUARD ***//////////////
//app.use(cors())

//////////*** BODY PARSER MIDDLEWARE ***///////////
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

/////////*** ROUTES INITIALISATION ***///////////

app.use(routes);

//With Parameter = app.use('/api',routes)

//////////*** HOT RELOAD CONFIG FOR STATIC FILES ***///////////

//const dev = process.env.NODE_ENV === 'development';
//if(dev){reload(app)}

//////////*** TEMPLATING ENGINE INTIALISATION */
app.engine('handlebars', tempEngine({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

//////////*** STATIC FILES PATH ***///////////
app.use(express.static(path.join(__dirname, 'static')));

//////////*** PORT INITIALISATION *//////////

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`\tServer Spinning On Port ${PORT}`));
