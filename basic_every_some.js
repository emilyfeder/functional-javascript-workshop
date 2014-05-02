module.exports = function checkUsersValid(goodUsers) {
	var goodUserIds = goodUsers.map(function(user){
		return user.id;
	});
	return function(submittedUsers) {
		return submittedUsers.every(function(user){
			return goodUserIds.indexOf(user.id) > -1;
		});
	};
};