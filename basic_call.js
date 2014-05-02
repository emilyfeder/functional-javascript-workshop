module.exports = function duckCount() {
	return Array.prototype.reduce.call(arguments, function(count, arg){
		if(Object.prototype.hasOwnProperty.call(arg, 'quack')) return count + 1; //it's a duck
		return count;
	}, 0);
};