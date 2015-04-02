var express = require('express');
var router = express.Router();
var mandrill = require('mandrill-api');
var mandrill_client = new mandrill.Mandrill('Xm-MGgnX9FpqQvjkNG1CIg');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.get('/optim2-difference', function(req, res) {
	res.render('optim2-difference', { title: 'Express' });
});

router.get('/careers', function(req, res) {
	res.render('careers', { title: 'Express' });
});

router.get('/assessing-finance', function(req, res) {
	res.render('assessing-finance', { title: 'Express' });
});

router.get('/improving-processes', function(req, res) {
	res.render('improving-processes', { title: 'Express' });
});

router.get('/measuring-performance', function(req, res) {
	res.render('measuring-performance', { title: 'Express' });
});

router.get('/finance-benchmarks', function(req, res) {
	res.render('finance-benchmarks', { title: 'Express' });
});

router.get('/whitepapers', function(req, res) {
	res.render('whitepapers', { title: 'Express' });
});

router.get('/contact', function(req, res) {
	res.render('contact', { title: 'Express' });
});

router.post('/contact', function(req, res) {

	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;

	var message = {
		// "html": "Name: <strong>" + name + "</strong><br>" + "Email address: <strong>"  + email + "</strong>" <br><br><br>" + postMessage ,
		"html": "hi there",
		"subject": message,
		"from_email": email,
		"from_name": name,
		"to": [{
						"email": "andy.aparece@gmail.com",
						"name": "Andy"
				}],
		"headers": {
				"Reply-To": email
		},
		"track_opens": true,
		"track_clicks": true,
		"auto_text": true
	};

	mandrill_client.messages.send({"message": message}, function(result) {
		console.log(result);
	 
	}, function(e) {
			// Mandrill returns the error as an object with name and message keys
			console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
			// A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
	});
});



module.exports = router;
