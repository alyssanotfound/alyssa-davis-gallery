/////////////////////
// ROOT CONTROLLER //
/////////////////////

exports.index = function(req, res) {
	console.log('Redirecting -> RootController.index');
	res.redirect('/exhibitions/index.html');
};