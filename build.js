var ClosureCompiler = require('google-closure-compiler').compiler;

// Set the compiler options
var compilerOptions = [
	'--compilation_level', 'ADVANCED',
	'--externs', 'bigjs-extern.js',
	'--module_output_path_prefix', './test/',
	'--js', 'test/empty.js',
	'--module', 'empty:1',
	'--formatting=pretty_print'
];

// Hard-coded array of test filenames
var tests = [
	'test'
];

// Loop through the filenames
for (var i = 0; i < tests.length; i++) {

	compilerOptions = compilerOptions.concat([
		'--js', 'test/' + tests[i] + '.js',
		'--module', tests[i] + '-compiled:1:empty'
	]);

}

var compiler = new ClosureCompiler(compilerOptions);

// Start the compiler
var compilerProcess = compiler.run(function(exitCode, stdOut, stdErr) {
	console.log(stdErr);
});