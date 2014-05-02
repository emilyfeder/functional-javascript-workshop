function loadUsers(userIds, load, done) {
	var users = [];
	var num_loaded = 0;
	function loadUser(id, index) {
		load(userIds[index], function(user) {
			users[index] = user;
			if(++num_loaded==userIds.length) {
				return done(users);
			}
		});
	}
	for (var i = 0; i < userIds.length; i++) {
		loadUser(userIds[i], i);
	}
}

module.exports = loadUsers