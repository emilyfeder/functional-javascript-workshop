var slice = Array.prototype.slice

function logger(namespace) {
	return function() {
		var args = slice.apply(arguments);
		console.log.apply(null, [namespace].concat(args));
	}
}

module.exports = logger