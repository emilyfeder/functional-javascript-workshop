function Spy(target, method) {
	var target_method = target[method];
	var spy = Object.create(target);
	spy.count = 0;
	target[method] = function() {
		spy.count++;
		return target_method.apply(target, Array.prototype.slice.apply(arguments));
	}
	return spy;
}

module.exports = Spy