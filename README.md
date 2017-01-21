# Gulp

Gulp is a building helper node tool particularly famous for website designing projects

## how to use this project

### ES2015

this project is using ecmascript-6, when you download the dependencies, babel will automatically get installed

`.babelrc` defines the language babel is using

### Gulp 4.0

Also this project uses Gulp version 4, 
when you download the dependencies Gulp 4.0 will automatically get installed from the github repo
if you try to use `npm install gulp --save-dev` it will fail because gulp 4.0 is not yet registered in npm.

However you'll also need to install the last version of gulp-cli to run the tasks from command line
```sh
# to install the command line tool
npm install 'gulpjs/gulp-cli' -g
```

### Start

**app** contains a small set of files simulating a project.
you'll need to install the dependencies

```sh
npm run deps
```

Once the dependencies are installed, look into `gulpfile.babel.js`
there are defined es2015 tasks for gulp, to execute one task
run

```sh
gulp <task-name>
```

Everytime you run a task, the directory `dist` will get deleted
This way you can see the effect of a particular task in the project

The following tasks are available :

- clean : will remove the `dist` directory
- build_styles : will copy all css files in `dist/styles`
- build_htmls : will
    - replace all occurrences of %TEMPLATE% to 'MyWebsite'
    - rename all extension `htm` to `html`
    - copy the result (stream) in `dist`


## Official example (https://github.com/gulpjs/gulp/tree/4.0)


```js
var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
```


Using ES2015 (https://github.com/gulpjs/gulp/tree/4.0)

```js
import gulp from 'gulp';
import less from 'gulp-less';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import del from 'del';

const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

/*
 * For small tasks you can use arrow functions and export
 */
const clean = () => del([ 'assets' ]);
export { clean };

/*
 * You can still declare named functions and export them as tasks
 */
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(clean, gulp.parallel(styles, scripts));
export { build };

/*
 * Export a default task
 */
export default build;
```




## how this project was mounted

- create a 'app' directory
- create `package.json` using `npm init`
- install gulp
  - `npm install -g gulp` to use `gulp` in the command line
  - also need `npm install gulp --save-dev` to define tasks
- create a gulpfile.js
  - import the gulp module `require('gulp')`
  - create tasks
- in `package.json` configure a script
- run `gulp <task>`