module.exports = function getShortMessages(messages) {
	return messages.map(function getMessage(message) {
		return message.message;
	}).filter(function filterShort(message) {
		return message.length < 50;
	});
};