function getDependencies(module_tree) {
	//console.log(JSON.stringify(module_tree, null, 4));
	if (!module_tree.dependencies) return [];
	var dependencies = [];
	function walkTree(tree) {
		if (!tree) return;
		Object.keys(tree).forEach(function(child){
			var dep = child + '@' + tree[child].version;
			if(dependencies.indexOf(dep)==-1) dependencies.push(dep);
			if(tree[child].dependencies) walkTree(tree[child].dependencies);
		});
	}
	walkTree(module_tree.dependencies);
	return dependencies.sort();
}

module.exports = getDependencies