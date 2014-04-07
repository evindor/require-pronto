define(['mod/module-d'], function (ModuleD) {
	var name = 'module-c';
	console.log(name + ' loaded with namespaced dependency ' + ModuleD.name);
	return { name: name };
});
