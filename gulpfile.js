'use strict';

var gulp = require('gulp');


// a gulp task possesses 2 or 3 arguments
// 1 : the name of the task
// 2 : an  array with the tasks to perform before performing this task
// 3 : the function to execute when the task is called
gulp.task('firstTask', function () {
    console.log('that is my first task');
});
// run `gulp firstTask`
