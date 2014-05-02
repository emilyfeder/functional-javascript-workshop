function repeat(operation, num) {
	if (num <= 0) return;
	operation()
	return repeat.bind(repeat, operation, --num);
}

function trampoline(fn) {
	while(fn) {
		fn = fn();
	}
}

module.exports = function(operation, num) {
	trampoline(repeat(operation, num));
}
