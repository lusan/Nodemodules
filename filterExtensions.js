/*
 * Implementation example of filterExtensionsModule
 * */
var fetchextentionsModule = require('./fetchExtensionsModule.js')
var dirName = process.argv[2];
var searchExtentions = process.argv[3];

fetchextentionsModule(dirName, searchExtentions, function(err, list) {
	if(err) {
		throw err;
	} else {
		list.forEach(function(file) {
			console.log(file);
		});
	}
});
