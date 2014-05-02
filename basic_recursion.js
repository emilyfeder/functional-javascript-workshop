//cheats because fn doesn't actually take in index, array as it should
/*function reduce(arr, fn, initial) {
	if (!arr.length) return initial;
	var first = arr[0];
	return reduce(arr.slice(1), fn, fn(initial, first));
};*/

//based on official solution after looking once to see that they use closure, which is pretty cool
function reduce(arr, fn, initial) {
	//because of closure, inner function will be able to know about the full array without passing it
	return (function reduceHelper(index, value){
		if(index+1 > arr.length) return value;
		return reduceHelper(index+1, fn(value, arr[index], index, arr));
	})(0, initial);
}

module.exports = reduce;
