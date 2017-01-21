'use strict';

var gulp = require('gulp');
var del = require('del'); // delete files or directories


// this function is the entry point if the gulp command
// was invoked without any arguments
// a gulp task possesses 2 or 3 arguments
// 1 : the name of the task
// 2 (optional) : an  array with the tasks to perform before performing this task
// 3 : the function to execute when the task is called
gulp.task('default', ['clean'], function () {});




// this task will move all html files from the app directory
// to the dist/htmls directory maintaining the dir structure !
gulp.task('moveHtmls', function () {
  
  // gulp.src() will treat wildcards and prepare a list of files
  // to process in the pipe function
  // the pipe function will execute for each file registered
  // in the list the named function `gulp.dest()`
  // this will move all the html files in "build/htmls"
  // if "builds/htmls" does't exist, gulp will make the parents
  return gulp.src('app/**/*.html').pipe(gulp.dest('dist/htmls'));
});
// run `gulp moveHtmls`


gulp.task('gulpSrc', function () {

  // gulp.src() will ...
  var jsFiles = gulp.src('app/**/*.js');

  return jsFiles;
});
// run `gulp gulpSrc`




// this instruction will be executed normally
// when gulp get invoked it reads gulpfile.js all content
// and performed the task after that process
// thus this line will be seen as the very first line
// of the gulp output
console.log('will be executed first');