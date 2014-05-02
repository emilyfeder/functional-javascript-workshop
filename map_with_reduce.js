module.exports = function arrayMap(in_arr, fn) {
	return in_arr.reduce(function(result, curr_val) {
		result.push(fn(curr_val));
		return result;
	}, []);
}