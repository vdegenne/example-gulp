'use strict';


import gulp from 'gulp';
import del from 'del'; // for file deletion
import $Module from 'gulp-load-plugins';
const $ = $Module();

// here's a basic function that represents a gulp task
// a gulp task should always return either :
// a Promise
// a Stream
// or call a passed callback
// this will delete the 'dist' directory
const clean = () => del(['dist']); // simplified es2015 basic function
// you always need to export a function or variable
// so gulp can "see" them as tasks
export { clean }; // define the 'clean' task


// this function will copy all the style files (css)
// from app/styles and subdirectories
// to dist/styles (it will recreate all the directories)
function styles () {
  // gulp.src() will treat wildcards and prepare a list of files
  // to process in the pipe function
  // the pipe function will execute for each file registered
  // in the list the named function `gulp.dest()`
  // this will move all the html files in "build/htmls"
  // if "builds/htmls" does't exist, gulp will make the parents  
  return gulp.src('app/styles/**/*.css')
      .pipe(gulp.dest('dist/styles'));
}
// you can also define task that will run others tasks
// gulp.series will execute tasks in order of arguments
// gulp.parallel will execute tasks in separate threads
export var build_styles = gulp.series(clean, styles);
// run `gulp build_styles`



// this task will copy the index.htm file from app
// and replace all occurrences of %TEMPLATE%
// with 'MyWebsite'. Will also change the extension htm to html
function htmls () {
  return gulp.src(['app/*.htm']) // stream all the '.htm' files
              // replace %TEMPLATE% with 'MyWebsite'
              .pipe($.replace('%TEMPLATE%', 'MyWebsite'))
              // rename all the extension 'htm' -> 'html'
              .pipe($.rename(function (path) {
                path.extname = '.html'
              }))
              .pipe(gulp.dest('dist'));
}
export var build_htmls = gulp.series(clean, htmls);

export var build = gulp.series(clean, [styles, htmls]); // define the 'simpleTask' task
// run `gulp simpleTask`



// this instruction will be executed normally
// when gulp get invoked it reads gulpfile.babel.js all content
// and performs the task after that process
// thus this line will be seen as the very first line
// of the gulp output
console.log('will be executed first');