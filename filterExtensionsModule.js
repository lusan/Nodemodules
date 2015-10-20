/*
 * This module is for filtering extentions in a
 * directory.
 * Arguments accepted:
 * 	1. Directory Name
 *  2. Extention to filter from the directory name provided in the
 *  second argument
 *  3. callback function
 * */

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err);
		}

		list = list.filter(function (file) {
			return path.extname(file) === '.' + filterStr;
		});

		callback(null, list);
	});
}
