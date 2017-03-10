// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 			// define our app using express
var bodyParser = require('body-parser'); 	//  body-parser
var morgan     = require('morgan'); 		// used to see requests
var mongoose   = require('mongoose'); 
var User       = require('./app/models/user');	//create  a model for user
var port       = process.env.PORT || 8080; 	// set the port for our app
// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	next();
});

// log all requests to the console 
app.use(morgan('dev'));

// connect to our database
mongoose.connect('mongodb://localhost:27017/soham');

// ROUTES FOR  API
// ======================================

// basic route for the home page
app.get('/', function(req, res) {
	res.send('Welcome to the home page!');
});

// get an instance of the express router
var apiRouter = express.Router();

// on routes that end in /users
// ----------------------------------------------------
apiRouter.route('/users')

	// create a user (accessed at POST http://localhost:8080/users)
	.post(function(req, res) {
		
		var user = new User();		// create a new instance of the User model
		user.name = req.body.name;  // set the users name (String)
		user.age = req.body.age;  // set the users age (String)
		user.address = req.body.address; //set the users address (String)
		user.interest = req.body.interest; //set the users interest (Boolean)
		user.reason = req.body.reason; //set the users reason (String)
		user.save(function(err) {
			if (err) {
				return res.send(err);
			}
			// return a message
			res.json({ message: 'User added!' });
		});

	})

	.get(function(req, res){
		User.find(function(err,users){
			
			if (err) {
				res.send(err);
			}
			res.json(users);
		});
	});

apiRouter.route('/users/:user_id')
	.get(function(req, res){
		User.findOne({
			name: req.params.user_id}, function(err, user){
			if(err) res.send(err);
			res.json(user);
		})
	})
	});

	.delete(function(req, res){
		User.remove({
			_id: req.params.name
		}, function(err,user){
			if(err) return res.send(err);
			res.json({message: 'Successfully deleted!'});
		});
	});

	apiRouter.get('/me', function(req, res){
		res.send(res.decoded);
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/api', apiRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Welcome to SolarCity Survey');