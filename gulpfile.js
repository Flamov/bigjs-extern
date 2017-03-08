/***** COMMON *****/

// Required NPM packages
var gulp = require('gulp'); // http://www.gulpjs.com/
var closureCompiler = require('google-closure-compiler').gulp(); // https://www.npmjs.com/package/google-closure-compiler

// Closure-compiles the /test/test.js file with the /src/bigjs-extern.js externs file
gulp.task('compiler', function() {

	var closureCompilerOptions = {
		compilation_level: 'ADVANCED',
		warning_level: 'VERBOSE',
		language_in: 'ECMASCRIPT6',
		language_out: 'ECMASCRIPT5',
		externs: [
			'src/bigjs-extern.js'
		],
		formatting: 'pretty_print',
		js_output_file: 'test-compiled.js'
	};

	return gulp.src('./test/test.js')
		.pipe(closureCompiler(closureCompilerOptions))
		.pipe(gulp.dest('./test'));

});

// Gulp task for building
gulp.task('default', [
	'compiler'
]);