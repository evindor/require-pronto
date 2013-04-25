define(['module-b', 'c/module-c'], function (ModuleB, ModuleC) {
	var name = 'module-a';
	console.log(name + ' loaded with deps [' + ModuleB.name + ', ' + ModuleC.name + ']');
	return { name: name };
});
