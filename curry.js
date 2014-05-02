function curryN(fn, n) {
	if (typeof n == 'undefined') n = fn.length;
	return function curry(arg) {
		if (n==1) return fn(arg);
		--n;
		fn = fn.bind(fn, arg);
		return curry;
	};
}

module.exports = curryN
