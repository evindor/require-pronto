define(['c/module-c'], function (ModuleC) {
	var name = 'module-b';
	console.log(name + ' loaded with deps [' + ModuleC.name + ']');
	return { name: name };
});
