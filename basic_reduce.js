module.exports = function countWords(words) {
	return words.reduce(function(counts, word){
		if(word in counts) counts[word]++;
		else counts[word] = 1;
		return counts;
	}, {});
};